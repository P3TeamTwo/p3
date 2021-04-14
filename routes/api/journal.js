const router = require("express").Router();
const journalController = require("../../controllers/journalController");

// Matches with "/api/journal"
router.route("/")
  // .get(journalController.findAll)
  .post(journalController.create);

// Matches with "/api/journal/:id"
router
  .route("/:id")
  .get(journalController.findById)
  .delete(journalController.remove)
  // .put(journalController.update)
  // .delete(journalController.remove);



module.exports = router;
