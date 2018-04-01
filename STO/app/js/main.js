$(document).ready(function() {
 // SLIDER REVOLUTION JS-SETUP 

      // jQuery('.tp-banner').revolution({
      //    delay:5000,
      //    startwidth:1170,
      //    startheight:350,
 
      // });

      (function($) {

	          // DOM Ready
	         $(function() {

	             // Binding a click event
	             // From jQuery v.1.7.0 use .on() instead of .bind()
	             $('#message-popup').bind('click', function(e) {

	                 // Prevents the default action to be triggered. 
	                 e.preventDefault();

	                // Triggering bPopup when click event is fired
	                $('#message_to_pop_up').bPopup({
	                easing: 'easeInOutCubic',
	                speed: 450,
	               	transition: 'slideDown',
	               	transitionClose:'slideUp'
	                });

	             });

	         });

	     })(jQuery);

	     (function($) {

	          // DOM Ready
	         $(function() {

	             // Binding a click event
	             // From jQuery v.1.7.0 use .on() instead of .bind()
	             $('#help-popup').bind('click', function(e) {

	                 // Prevents the default action to be triggered. 
	                 e.preventDefault();

	                // Triggering bPopup when click event is fired
	                $('#help_to_pop_up').bPopup({
	                easing: 'easeInOutCubic',
	                speed: 450,
	               	transition: 'slideDown',
	               	transitionClose:'slideUp',
	               	followSpeed: 2000,
	                });

	             });

	         });

	     })(jQuery);

});

