var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', function(req, res, next) {
  res.send({
    express: "This is the GET route for /api/books"
  });
});

router.post('/books', function(req, res, next) {
  console.log(req.data);
  res.send({
    express: "You've tried to save a book",
  });
})

module.exports = router;
