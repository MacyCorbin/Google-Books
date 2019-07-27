import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Container } from "../../components/Contents";
import { Input, FormButton } from "../../components/Form";

class Search extends Component {
  state = {
    title: "",
    toResults: false,
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {

      const title = this.state.title.trim();

      API.getNewBooks(title)
        .then(res => {

          console.log(res.data.items);

          this.setState({
            toResults: true,
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.toResults) {
      return <Redirect to={{
        pathname: "/results",
        data: { results: this.state.results }
      }} />
    }
    return (
      <div>
        <Jumbotron>
          {/* <h1 className="display-4">Biblio Search</h1> */}
          <img src={require('../BiblioSearch.png')} />
          <p className="lead">Search and save books of your interest.</p>
          <hr className="my-4" />
          <p className="lead">
            <Link className="btn btnText1 btn-default btn-lg" to="/" role="button">New Search</Link>
            <Link className="btn btnText2 btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
          </p>
        </Jumbotron>
        <Container>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Book Title"
              placeholder="Search Book Title (required)"
            />
            <FormButton
              onClick={this.handleFormSubmit}
              className="btn btn-info"
            >
              Search
            </FormButton>
          </form>
        </Container>
      </div>
    );
  }
}

export default Search;