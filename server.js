const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const routes = require("./routes");
app.use(routes);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use('/static', express.static(path.join(__dirname, 'client/build')));
}


// How to connect locally "mongodb://localhost/YOUR DATA BASE NAME"
mongoose.connect(
  process.env.MONGDB_URI || 'mongodb://localhost/journal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
