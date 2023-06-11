var express = require('express');
var router = express.Router();

/* GET index listing. */
router.get('/api', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200)

  res.json({
    'name': 'Natalia',
    'msg': 'hello!'
  });
});

module.exports = router;
