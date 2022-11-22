"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _ejsMate = _interopRequireDefault(require("ejs-mate"));
var _path = _interopRequireDefault(require("path"));
var _webhooks = _interopRequireDefault(require("./routes/webhooks"));
var app = (0, _express["default"])();
var port = process.env.PORT || 8080;
app.engine('ejs', _ejsMate["default"]);
app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT']
}));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use('/api', _webhooks["default"]);
app.listen(port, function () {
  console.log('Listen on port ' + port);
});