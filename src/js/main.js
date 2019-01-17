    if ($('.js-hamburger').length) {

        $('.js-hamburger').click(function() {

          	var nav = $('.header_mob-nav')

          	$(this).toggleClass('is-active');
          	nav.toggleClass('header_mob-nav--open');
          	$(".header").toggleClass('header_fixed');

      	}); 
    };

    //promo page slider

    if ($('.js-promo-other').length) {

        $('.js-promo-other').slick({
        	  dots: false,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: false
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 540,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
        });

    };