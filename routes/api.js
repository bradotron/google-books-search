var express = require('express');
var router = express.Router();

// mongoose is our ODM
var mongoose = require("mongoose");
var db = require("../models");

// Connect to the Mongo DB
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googleBooksSearch";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function(err, res) {
  if (err) {
    console.log("ERROR connecting to: " + MONGODB_URI + ". " + err);
  } else {
    console.log("Succeeded connected to: " + MONGODB_URI);
  }
});

// get route to return all books in the database
router.get('/books', function(req, res, next) {
  // Grab every document in the books collection
  db.Book.find({})
    .then(function(dbBook) {
      // If we were able to successfully find books, send them back to the client
      res.json(dbBook);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// POST route to 
router.post('/books', function(req, res, next) {
  //console.log(req.body);
  db.Book.create(req.body[0]).then(dbBook => {
    res.json(dbBook);
  }).catch(err => {
    res.json(err);
  });
})

module.exports = router;
