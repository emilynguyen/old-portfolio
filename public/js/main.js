/*
 * main.js
 */

/*
 * Name: filter
 * Description: Filters projects in the gallery.
 * Parameters: input - the filter clicked on
 * Return: None
 */
function filter(input) {
  // Return if filter is already active
  if ($(input).hasClass("active-filter")) return;
  else if ($(input).hasClass("filter-label-all")) {
    // Show all projects
    $(".filter-ux").show();
    $(".filter-visual").show();
    $(".filter-dev").show();
  } else if ($(input).hasClass("filter-label-ux")) {
    // Show only UI/UX projects
    $(".filter-visual").hide();
    $(".filter-dev").hide();
    $(".filter-ux").show();
  } else if ($(input).hasClass("filter-label-visual")) {
    // Show only graphics
    $(".filter-ux").hide();
    $(".filter-dev").hide();
    $(".filter-visual").show();
  }
  else if ($(input).hasClass("filter-label-dev")) {
    // Show only dev
    $(".filter-ux").hide();
    $(".filter-visual").hide();
    $(".filter-dev").show();
  }

  // Update active filter
  $(".active-filter").removeClass("active-filter");
  $(input).addClass("active-filter");
}

/*
 * Main function
 */
var main = function() {
  /* Project filters */
  $(".filter").click(function() {
    filter(this);
  });

  /* Hamburger menu */
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    // If menu is closed and scrolltop is not 0
    if (!$hamburger.hasClass("is-active") && $(window).scrollTop() > 0) {
      // Scroll to top before disabling scroll
      $("html,body")
        .animate({ scrollTop: 0 }, 200)
        .promise()
        .then(function() {
          // Disable scroll
          $("body").toggleClass("no-scroll");
        });

      // Toggle hamburger open/close
      $hamburger.toggleClass("is-active");
      // Toggle menu
      $(".menu-overlay").fadeToggle(250);
    } else {
      // Toggle scroll
      $("body").toggleClass("no-scroll");
      // Toggle hamburger open/close
      $hamburger.toggleClass("is-active");
      // Toggle menu
      $(".menu-overlay").fadeToggle(250);
    }
  });

  /* Highlight active menu item */
  var url = window.location.href;
  $(".menu a")
    .filter(function() {
      return this.href == url;
    })
    .addClass("active");
};

$(document).ready(main);
