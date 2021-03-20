const router = require("express").Router();
const journalRoutes = require("./journal");
const userRoutes = require("./user");

// journal routes
router.use("/journal", journalRoutes);
router.use("/user", userRoutes);

module.exports = router;
