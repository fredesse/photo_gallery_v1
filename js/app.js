
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $title = $("<h1></h1>");

var $nextArrow = $('<div id="nextArrow"></div>');
var $prevArrow = $('<div id="prevArrow"></div>');

$overlay.append($image);		/* Adds image to overlay */

$overlay.append($title);

$overlay.append($caption);

$image.before($prevArrow);
$image.after($nextArrow);

$("body").append($overlay);   /* Adds overlay to body */


$("#imageGallery a").click(function(event) {		/* Captures the click event on a link */
	event.preventDefault();

	getCurrentImage(this);

	$overlay.show();
});

$prevArrow.click(function(event) {
	getPrevImage(this);
});

$overlay.click(function() {
	getNextImage();
});


function getCurrentImage (currentImage) {				/* Gets current image */
	thisImage = currentImage;

	var imageLocation = $(currentImage).attr("href");		
	$image.attr("src", imageLocation);
	
	var captionTitle = $(currentImage).children("img").attr("title");		/* Sets the title */
	$title.text(captionTitle);
	
	var captionText = $(currentImage).children("img").attr("alt");			/* Sets the captions */
	$caption.text(captionText);
};

function getPrevImage() {									// Gets the previous image
	imageParent = $(thisImage).parent().prev();
	if(imageParent.length!=0) {
		thisImage = $(imageParent.children("a"));
	}
	getCurrentImage(thisImage);
};

function getNextImage() {
    imageParent = $(thisImage).parent().next();
    if(imageParent.length!=0){
    	thisImage = $(imageParent).children("a");
    }
    getCurrentImage(thisImage);
}


$overlay.click(function() {
	$overlay.hide();
});