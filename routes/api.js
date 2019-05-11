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
  res.send({
    express: "This is the GET route for /api/books"
  });
});

// POST route to 
router.post('/books', function(req, res, next) {
  console.log(req.data);
  res.send({
    express: "You've tried to save a book",
  });
})

module.exports = router;
