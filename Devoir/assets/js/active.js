jQuery(document).ready(function($) {

      $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
      })

    	$('.counter').counterUp({
    	    delay: 10,
    	    time: 1000
    	});

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.fixed-menu').addClass("active");
            }
            else {
                $('.fixed-menu').removeClass("active");
            }
        });

      $(document).on('click', 'a[href^="#"]', function (event) {
          event.preventDefault();

          $('html, body').animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 1000);
      });

        $('.slider').owlCarousel({
            items:1,
            dots:true,
            autoplayHoverPause:true,
            autoplay:false,
            smartSpeed:1000,
            loop:true,
          });

        $('.team-slider-list').owlCarousel({
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }});

        $('.team-deatils-slide').owlCarousel({
            loop:true,
            items:1,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
            smartSpeed:1000,

          });


        $('.brand-logo-list').owlCarousel({
            loop:true,
            items:4,
            autoplayHoverPause:true,

            dots: false,
            nav: true,
            navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
            smartSpeed:1000,
             responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
          });

  $('#web-design').circleProgress({
    value: 0.75,
    thickness: 5,
    size: 150,
    fill: '#1CA399',
    emptyFill:'#ebebeb',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
  });

  $('#web-devolopment').circleProgress({
    value: 0.92,
    thickness: 5,
    size: 150,
    fill: '#1CA399',
    emptyFill:'#ebebeb',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(92 * progress) + '<i>%</i>');
  });

  $('#speed-optimi').circleProgress({
    value: 0.68,
    thickness: 5,
    size: 150,
    fill: '#1CA399',
    emptyFill:'#ebebeb',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(68 * progress) + '<i>%</i>');
  });

  $('#customer-suport').circleProgress({
    value: 1,
    thickness: 5,
    size: 150,
    fill: '#1CA399',
    emptyFill:'#ebebeb',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  });

  $('#marketing').circleProgress({
    value: 0.83,
    thickness: 5,
    size: 150,
    fill: '#1CA399',
    emptyFill:'#ebebeb',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
  });

  $('#advertisement').circleProgress({
    value: 0.5,
    thickness: 5,
    size: 150,
    fill: '#1CA399',
    emptyFill:'#ebebeb',
    animation: {
    	 duration: 1200, 
    	 easing: "circleProgressEasing"
    },
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
  });

});

