
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $title = $("<h1></h1>");

$overlay.append($image);		/* Adds image to overlay */

$overlay.append($title);

$overlay.append($caption);

$("body").append($overlay);   /* Adds overlay to body */


$("#imageGallery a").click( function(event) {		/* Captures the click event on a link */
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	var captionTitle = $(this).children("img").attr("title");
	$title.text(captionTitle);
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
	$overlay.show();
});

$overlay.click( function(){
	$overlay.hide();
});