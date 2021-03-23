const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Example posting a local image file (Node.js only):
const fs = require('fs');

const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('bf073f75-72b3-42e3-8c77-db0b9c09bdbc');

(async function() {
    var resp = await deepai.callStandardApi("toonify", {
            image: fs.createReadStream("face.jpg"),
    });
    console.log(resp);
})()

// Routes
const routes = require("./routes");
app.use(routes);


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);




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
