(function($) {
	    $(function() {
	        var jcarousel = $('.jcarousel');

	        jcarousel
	            .on('jcarousel:reload jcarousel:create', function () {
	                var carousel = $(this),
	                    width = carousel.innerWidth();

	                if (width >= 800) {
	                    width = width / 3;
	                } else if (width >= 550) {
	                    width = width / 2;
	                }
	                 else if (width >= 400) {
	                    width = width / 1;
	                }

	                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
	            })
	            .jcarousel({
	                wrap: 'circular'
	            });

	        $('.jcarousel-control-prev')
	            .jcarouselControl({
	                target: '-=1'
	            });

	        $('.jcarousel-control-next')
	            .jcarouselControl({
	                target: '+=1'
	            });

	        $('.jcarousel-pagination')
	            .on('jcarouselpagination:active', 'a', function() {
	                $(this).addClass('active');
	            })
	            .on('jcarouselpagination:inactive', 'a', function() {
	                $(this).removeClass('active');
	            })
	            .on('click', function(e) {
	                e.preventDefault();
	            })
	            .jcarouselPagination({
	                perPage: 1,
	                item: function(page) {
	                    return '<a href="#' + page + '">' + page + '</a>';
	                }
	            });
		    });
			
			
			$('.jcarousel').touchwipe({
			  wipeLeft: function() {
				jcarousel.jcarousel('next');
			  },
			  wipeRight: function() {
				jcarousel.jcarousel('prev');
			  },
			  min_move_x: 20,
			  min_move_y: 20,
			  preventDefaultEvents: false
			});
		})(jQuery);




	window.onload = function() { // после загрузки страницы

		var scrollUp = document.getElementById('scrollup'); // найти элемент

		

		scrollUp.onclick = function() { //обработка клика
			window.scrollTo(0,0);
		};

	// show button

		window.onscroll = function () { // при скролле показывать и прятать блок
			if ( window.pageYOffset > 0 ) {
				scrollUp.style.display = 'block';
			} else {
				scrollUp.style.display = 'none';
			}
		};
	};