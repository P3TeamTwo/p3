const router = require("express").Router();
const path = require("path");

const journalRoutes = require("./journal");
const userRoutes = require("./user");

// journal routes
router.use("/journal", journalRoutes);

router.use("/user", userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = router;
