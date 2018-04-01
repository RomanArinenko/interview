$(document).ready(function() {

	     // popup
	     $('#pricelist-popup').bind('click', function(e) {

	         // Prevents the default action to be triggered. 
	         e.preventDefault();

	        // Triggering bPopup when click event is fired
	        $('#pricelist_to_pop_up').bPopup({
		        easing: 'easeInOutCubic',
		        speed: 450,
		       	transition: 'slideDown',
		       	transitionClose:'slideUp'
	        });

	     });

	     // validation form
	     $('#price_form, #popup_form').feelform({
			notificationType: 'border, message, okIcon, errorIcon',
			validateOnTheFly: true,
			gravity: 'bottom',
			borderProperty: '#BA2C2C 2px solid',
			clearAfterSubmit: false,
			errorMessages: {
				_default: function() {
					return "Неверное значение";
				},
				required: function() {
					return "Поле должно быть заполнено";
				},
				check: function() {
					return "не поставлена галочка";
				},
				maxLength: function(val) {
					return "не более " + val + " символов";
				},
				minLength: function(val) {
					return "не менее " + val + " символов";
				},
				email: function() {
					return "неверный формат электронной почты";
				},
				number: function() {
					return "в это поле можно вводить только цифры";
				},
				phone: function() {
					return "неверный формат телефона";
				},
				date: function() {
					return "дата введена неправильно";
				},
				text: function() {
					return "в это поле можно вводить только буквы";
				},
				max: function(val) {
					return "значение не должно превышать " + val;
				},
				min: function(val) {
					return "значение должно быть не меньше чем " + val;
				},
				url: function() {
					return "неверный формат URL";
				},
				equalTo: function() {
					return "Значения не совпадают";
				},
				file: function() {
					return "Неверный тип файла";
				},
				antibot: function() {
					return "Защита от роботов";
				},
				ajax: function(val) {
					return val || "Неверное значение";
				}
			}
		});
	     
	     // owl-carousel
	     $(".owl-carousel").owlCarousel({
	     	nav: true,
			navRewind: true,
			navText: [ '', '' ],
			navElement: 'span',
			slideBy: 1,

			items: 5,
			loop: true,

			margin: 60,
			responsiveClass: true,

			responsive: {
				991: {
					items: 5,
					center: false
				},
				767: {
					items: 4,
					center: false
				},
				481: {
					items: 3,
					center: false
				},
				0: {
					items: 2,
					center: true
				}
			},

			responsiveRefreshRate: 0
	     });

	    var scrollUp = document.getElementById('scrollup'); // найти элемент
		scrollUp.onclick = function() { //обработка клика
			$('body,html').animate({scrollTop:0},800); // задаем точку прокрутки и скорость 800
		};

		// show button
		window.onscroll = function () { // при скролле показывать и прятать блок
			if ( window.pageYOffset > 1000 ) {
				$('#scrollup').fadeIn(700); // скорость появления кнопки
			} else {
				$('#scrollup').fadeOut(100); // скорость исчезновения кнопки
			}
		};

	    

});

