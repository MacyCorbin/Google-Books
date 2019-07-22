const router = require("express").Router();
const biblioController = require("../../controllers/biblioController");

// Matches with "/api/books"
router.route("/")
  .get(biblioController.findAll)
  .post(biblioController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(biblioController.findById)
  .put(biblioController.update)
  .delete(biblioController.remove);

module.exports = router;