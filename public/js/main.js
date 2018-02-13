/*
 * main.js
 */

function toggleMenu() {

}

/*
 * Name: filter
 * Description: Filters projects in the gallery.
 * Parameters: input - the filter clicked on
 * Return: None
 */
function filter(input) {
	// Return if filter is already active
	if ($(input).hasClass('active-filter'))
		return;
	// Show all projects
	else if ($(input).hasClass('filter-all')) {
		$('.ux').show();
		$('.graphics').show();
	}
	// Show only UI/UX projects
	else if ($(input).hasClass('filter-ux')) {
		$('.ux').show();
		$('.graphics').hide();	
	}
	// Show only graphics
	else {
		$('.ux').hide();
		$('.graphics').show();	
	}

	// Update active filter
	$('.active-filter').removeClass('active-filter');
	$(input).addClass('active-filter');
}


/*
 * Main function
 */
var main = function () {

	/* Project filters */
	$('.filter').click(function() {
		filter(this);
	});

	/* Hamburger menu */
	var $hamburger = $('.hamburger');
  	$hamburger.on('click', function(e) {

  		// If menu is closed and scrolltop is not 0
  		if(!$hamburger.hasClass('is-active') && $(window).scrollTop() > 0) {
  			// Scroll to top before disabling scroll
  			$('html,body').animate({ scrollTop: 0 }, 200).promise().then(function() {
  				// Disable scroll
        		$('body').toggleClass('no-scroll');	
    		});

			// Toggle hamburger open/close
			$hamburger.toggleClass('is-active');		    
			// Toggle menu
			$('.menu-overlay').fadeToggle(250);
  		}
  		else {
	  		// Toggle scroll
			$('body').toggleClass('no-scroll');
			// Toggle hamburger open/close
			$hamburger.toggleClass('is-active');		    
			// Toggle menu
			$('.menu-overlay').fadeToggle(250);
		}
  	});


  	var url = window.location.href;
    $('.menu a').filter(function() {
        return this.href == url;
    }).addClass('active'); 

};

$(document).ready(main);