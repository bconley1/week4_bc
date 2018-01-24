// On click, display/unhide the '.hide' class Paragraph + 'Read Less' button
// On click, assign '.hide' class to '.readmore' button class (using toggle class?)
// event.preventDefault - prevents it from scrolling to top, which is default behavior when clicking on anchor tag 
// slideToggle to reveal text 

function togglestate (){
	event.preventDefault();
	console.log('togglestate');
	$('#show-this-on-click').slideToggle();
	$('.readless').slideToggle();
	$('.readmore').slideToggle();
}

$('.readmore').click(togglestate);
$('.readless').click(togglestate);

//--------------------------------

function togglestate2 (){
	event.preventDefault();
	console.log('togglestate 2');
	$('#learnmoretext').slideToggle();
	$('.showless').slideToggle();
	$('.learnmore').slideToggle();

}

$('.learnmore').click(togglestate2);
$('.showless').click(togglestate2);
