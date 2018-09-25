"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (variables) {
  var body = document.getElementsByTagName("BODY")[0];

  setObject(body, "-", variables);
};

var setObject = function setObject(body, prefix, object) {
  for (var key in object) {
    if (_typeof(object[key]) === "object") {
      setObject(body, prefix + "-" + key, object[key]);
    } else {
      body.style.setProperty(prefix + "-" + key, object[key]);
    }
  }
};