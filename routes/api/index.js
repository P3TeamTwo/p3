const router = require("express").Router();
const path = require("path");

const journalRoutes = require("./journal");
const userRoutes = require("./user");
const filesRoutes = require("./files")

// journal routes
router.use("/journal", journalRoutes);
// Users
router.use("/user", userRoutes);
// Memos
router.use("/files", filesRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = router;
