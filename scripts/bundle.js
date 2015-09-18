(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var $imageURL = $('#imageURL');
    var $caption = $('#caption');
    var $cancel = $('#cancel');
    var $addImage = $('#addImage');
    var $images = $('#images');
    var $form = $('form');
    var url = 'http://tiyfe.herokuapp.com/collections/onlyfrisbee';
    var $plus = $('#plus');

    setInterval(function () {
        $.get(url, function (response) {
            $images.html('');
            response.forEach(function (imageData) {
                $images.append("<div class='coolpic'><img src=" + imageData.postImage + "></div><div class='captionUpdate'>" + imageData.postCaption + '</div>');
            }), 'json';
        });
    }, 2000);
    $plus.click(function () {
        $('.nav').slideToggle('slow');
    });

    $cancel.click(function (e) {
        e.preventDefault();
        clear();
        $('.nav').slideToggle('slow');
    });

    $addImage.click(function (e) {
        e.preventDefault();
        console.log("i run!");
        var newImage = $imageURL.val();
        var text = $caption.val();
        $images.append("<div class='coolpic'><img src=" + newImage + "></div><div class='captionUpdate'>" + text + '</div>');
        $.post(url, {
            postImage: newImage,
            postCaption: text
        }, function (result) {
            console.log('saved', result);
            console.log(result.postImage);
        }, 'json');
    });

    function clear() {
        $imageURL = $imageURL.val('');
        $caption = $caption.val('');
    }
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map