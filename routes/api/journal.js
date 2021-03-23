const router = require("express").Router();
const journalController = require("../../controllers/journalController");

// Matches with "/api/journal"
router.route("/")
  .get(journalController.findAll)
  .post(journalController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(journalController.findById)
  // .put(journalController.update)
  // .delete(journalController.remove);



module.exports = router;
