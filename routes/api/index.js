const router = require("express").Router();
const journalRoutes = require("./journal");

// journal routes
router.use("/journal", journalRoutes);

module.exports = router;
