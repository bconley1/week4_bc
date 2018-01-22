// On click, display/unhide the '.hide' class Paragraph + 'Read Less' button
// On click, assign '.hide' class to '.readmore' button class (using toggle class?)
// event.preventDefault - prevents it from scrolling to top, which is default behavior when clicking on anchor tag 
// slideToggle to reveal text 

function unhide (){
	event.preventDefault();
	$('#show-this-on-click').slideToggle();
	$('.readless').slideToggle();
	$('.readmore').slideToggle();
}

$('.readmore').click(unhide); 


function unhide2 (){
	event.preventDefault();
	$('#show-this-on-click').slideToggle();
	$('.readless').slideToggle();
	$('.readmore').slideToggle();
}

$('.readless').click(unhide2); 