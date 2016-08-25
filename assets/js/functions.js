/*global $, alert */
$(document).ready(function () {
  'use strict';

  var $btnOne = $('.form-one button'),
    $btnTwo = $('.form-two button');

  $btnOne.click(function (event) {
    event.preventDefault();
    $('.form-container').toggleClass('reg-mode');

  });

  $btnTwo.click(function (event) {
    event.preventDefault();
    $('.form-container').toggleClass('reg-mode');
  });



});
