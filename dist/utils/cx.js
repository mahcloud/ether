"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (object) {
  var classes = "";

  for (var key in object) {
    if (object[key]) {
      classes = classes === "" ? key : classes + " " + key;
    }
  }

  return classes;
};