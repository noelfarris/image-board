'use strict';

$(document).ready(function() {

    var $imageURL = $('#imageURL');
    var $caption = $('#caption');
    var $cancel = $('#cancel');
    var $addImage = $('#addImage');
    var $images = $('#images');
    var $form = $('form');
    var url = 'http://tiyfe.herokuapp.com/collections/onlyfrisbee';
    var $plus = $('#plus');
    var $coolpic = $('.coolpic');

    setInterval(function() {
        $.get(
            url,
            function(response) {
            	$coolpic.html('');
                response.forEach(function(imageData) {
                        $coolpic.append("<img src=" + imageData.postImage + "><div class='captionUpdate'>" + imageData.postCaption + '</div>');
                    }),
                    'json'
            });
    }, 2000)
	$plus.click(function() {
		$('.nav').slideToggle('slow');
	});

	$cancel.click(function(e) {
		e.preventDefault();
		clear();
		$('.nav').slideToggle('slow');
	})

    $addImage.click(function(e) {
        e.preventDefault();
        console.log("i run!");
        var newImage = $imageURL.val();
        var text = $caption.val();
        $coolpic.append("<img src=" + newImage + "><div class='captionUpdate'>" + text + '</div>');
        $.post(
            url, {
                postImage: newImage,
                postCaption: text
            },
            function(result) {
                console.log('saved', result);
                console.log(result.postImage);
               
            },
            'json'
        )
    });

function clear() {
	$imageURL = $imageURL.val('');
	$caption = $caption.val('');
}


})
