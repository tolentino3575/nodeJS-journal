(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Length method for number of words in the title
exports.titleLength = function(title) {
  var titleArray = title.split(" ");
  var titleLength = titleArray.length;

  return titleLength;

}

},{}],2:[function(require,module,exports){
var titleLength = require('./../js/titleLength.js')
//jquery to display title title
$(document).ready(function() {
  $("#journal form").submit(function(event) {
    var titleInput = $("input#title").val();
    console.log(titleInput);
    $(".entry").text(titleInput);
    $("#response").show();

    event.preventDefault();

  });
});

//Length method for number of words in the title
exports.bodyLength = function(body) {
  var bodyArray = body.split(" ");
  var bodyLength = bodyArray.length;

  return bodyLength;

}

},{"./../js/titleLength.js":1}]},{},[2]);
