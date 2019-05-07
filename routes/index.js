var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express-backend', function(req, res, next) {
  res.send({
    express: "YOUR BACK END IS CONNECTED...AND HOT"
  });
});

module.exports = router;
