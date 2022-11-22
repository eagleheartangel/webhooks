"use strict";

var _express = require("express");
var router = (0, _express.Router)();
router.get('/verification-completed', function (req, res) {
  console.log(req.body);
  res.render('index', {
    respuesta: JSON.stringify(req.body)
  });
});
module.exports = router;