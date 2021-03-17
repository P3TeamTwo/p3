const router = require("express").Router();
const journalRoutes = require("./journal");

// Book routes
router.use("/journal", journalRoutes);

module.exports = router;
