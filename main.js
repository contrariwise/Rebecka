/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");


function inView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('.parallax').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
      	
	      	if (inView($bgobj)) {
		                    
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = ($window.scrollTop());
				
				yPos += $bgobj.data('offset');
				
				// Put together our final background position
				var coords = '50% '+ parseInt(yPos) + 'px';
		
				// Move the background
				$bgobj.css({ backgroundPosition: coords });
			 }
		
		}); // window scroll Ends

 	});	

}); 
