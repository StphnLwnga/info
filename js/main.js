import pjsConfig from './particlesjs-config.js';

(function ($) {
	"use strict";
	AOS.init();

	particlesJS('particles-js', pjsConfig, function() {
		console.log('callback - particles.js config loaded');
	});

	// const textWrapper = document.querySelector('.ml10 .letters');
	// console.log(textWrapper)
	// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	// anime.timeline({loop: true})
  // .add({
  //   targets: '.ml10 .letter',
  //   rotateY: [-90, 0],
  //   duration: 1300,
  //   delay: (el, i) => 45 * i
  // }).add({
  //   targets: '.ml10',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000
  // });

	$('[data-toggle="tooltip"]').tooltip({
		animation: true,
	});

	var nav = $('nav');
  var navHeight = nav.outerHeight();
	// console.log(navHeight)
	console.log($('.intro-content').outerHeight());
	const intro = $('.intro-content').outerHeight()
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		// console.log($(window).scrollTop() > pixels);
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
			$('#stphn-nav').hide("slow");
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
			$('#stphn-nav').show("slow");
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}

		// if ($(window).scrollTop() > intro) {
		// 	$('.progress-bar').addClass('progress-bar-start');
		// }
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	// external links
	$("#ipay-link").click(function() {
		window.open("https://ipayafrica.com/");
	});

	$("#sdl-link").click(function() {
		window.open("https://slashdotlabs.com/#");
	});

	$("#palace-link").click(function() {
		window.open("https://palaceladieshostels-ljrmqvoxwx.now.sh/");
	});

	$(".social-icons > .ico-circle").hover(
		function() {
			// console.log($(this).children())
			$(this).children().addClass("text-light");
		},
		function() {
			$(this).children().removeClass("text-light");
		}
	);

	$("#twitter").click(function() {
		window.open("https://twitter.com/rls_thekraken");
		// console.log($(this).children())
		// $(this).children().removeClass("text-light");
		// $(this).children().addClass("text-dark");
	});

	$("#linkedin").click(function() {
		window.open("https://www.linkedin.com/in/stephen-mutebi-559b7215a/");
	});

	$("#github").click(function() {
		window.open("https://github.com/StphnLwnga");
	});

	$("#c-year").text(function() {
		const currDate = new Date().getFullYear();
		return currDate > 2020 ? `2020 - ${currDate}` : currDate;
	})

})(jQuery);

