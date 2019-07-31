import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer"

const App = () => (
  <Router>
    <div style={{height:"90%"}}>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
      
    </div>
    <Footer />
  </Router>
);

export default App;