/* Any JavaScript here will be loaded for all users on every page load. */

/* Open TOC by default on Desktop */
$(document).ready(function() {
  // Set the 'show' class based on screen width
  $('#header').toggleClass('show', $(window).width() >= 768);

  // Add an event listener for window resize
  $(window).resize(function() {
    $('#header').toggleClass('show', $(window).width() >= 768);
  });
});

/* Close the section menu when a dropdown option is clicked */
$(document).ready(function() {
  $('.section-navbar .nav-link:not(.actions-tab)').on('click', function() {
    $('.section-navbar').removeClass('show');
  });
});

/* Close dropdown menus when clicking somewhere on the page */
$(document).on('click', function(event) {
      if (!$(event.target).closest('.navbar-collapse').length) {
        $('.navbar-collapse').collapse('hide');
      }
    });

/* Remove active classes when clicking on new nav-link (for Bootstrap tabs) */
$(".nav-tabs .nav-link").click(function() {
    // Remove 'active' class only from siblings
    $(this).siblings().removeClass('active');
});

 /* Add heading before references */
 $(document).ready(function(){
     $('.mw-references-wrap').before('<h3 class="mt-5">References</h3>');
 });

/* Add .overflow-auto to reference container */
$(document).ready(function() {
  $('.mw-references-wrap').addClass('overflow-auto');
});

/* Wrap tables in container with .overflow-auto */
$("table").wrap("<div class='overflow-auto'></div>");

/* Break text on slashes (heading and reference links). */
$(document).ready(function () {
    $('span.mw-page-title-main, .reference-text > a').html(function (_, html) {
        return html.replace(/\//g, '\u200B/\u200B');
    });
});

/* Open link in tabs when parent element contains .link-in-tab */
$( function () {
	$( '#mw-content-text' ).on( 'click', '.link-in-tab > a', function () {
		var otherWindow = window.open();
		otherWindow.opener = null;
		otherWindow.location = this;
		return false;
	} );
} );

$(document).ready(function() {
    $('.navbar-tools').css({
      display: 'flex',
      'flex-direction': 'row'
    });
});