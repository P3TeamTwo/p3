const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/user");
const { response } = require("express");

// @route POST api/users/register
// @desc Register user
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.json("Email already exists");
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json('user logged out!')
  res.redirect('/')
});

// @route POST api/users/login
// @desc Login user and return JWT token
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.json("Not a valid email address");
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.json("Email address not found");
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Saving usersId for data-match
        const userId = user.id;
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            // Sending back to Login Component
            res.json({
              success: true,
              token: "Bearer " + token,
              user: userId
            });
          }
        )
      } else {
        return res.json("Incorrect Password");
      }
    });
  });
});



module.exports = router;
