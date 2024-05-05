(function ($) {
    'use strict';

    AOS.init({
        duration: 1000
    });

    // Add Class to Header on scroll
    $(window).scroll(function () {
        var scrollHeader = $(window).scrollTop();
        if (scrollHeader >= 10) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });

    $(document).ready(function () {
        // Enter code here
    });

    const swiper = new Swiper('.client-says', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 3,
        // spaceBetween: 64,
        autoplay: {
            delay: 1500,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // breakpoints
        breakpoints: {
            1200: {
              spaceBetween: 30,
            },
            1400: {
                spaceBetween: 64,
            }
          }
      
    });
    

    const swiper1 = new Swiper('.blog-slider', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 2,
        // spaceBetween: 64,
        autoplay: {
            delay: 1500,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },        
        // breakpoints
        breakpoints: {
            1200: {
              spaceBetween: 30,
            },
            1400: {
                spaceBetween: 50,
            },
            1500: {
                spaceBetween: 70,
            }
          }
      
    });

})(jQuery)

