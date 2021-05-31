// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Activación de transición del menú principal y del menú móvil
    $('aside#menu-moviles-idx nav a, aside#menu-moviles nav a, main section#cover article figure a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles-idx, aside#menu-moviles').animate({
            right: 0
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu-moviles-idx nav a, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles-idx, aside#menu-moviles').animate({
            right: -290
        },1000,'easeOutElastic');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });

    // Activación de Slick Slider
    $('.pro1, .pro2, .pro3, .pro4, .pro5, .pro6').slick({
        autoplay: false,
        autoplaySpeed: 1200,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
        dots: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        pauseOnFocus: false
    });

    //Slider activacion hover
    $('.pro1').hover(function(){
      $('.pro1')
        .slick('slickPlay');
        }, function(){
          $('.pro1')
            .slick('slickPause')
            .slick('slickGoTo',0);
    });
    $('.pro2').hover(function(){
      $('.pro2')
        .slick('slickPlay');
        }, function(){
          $('.pro2')
            .slick('slickPause')
            .slick('slickGoTo',0);
    });
    $('.pro3').hover(function(){
      $('.pro3')
        .slick('slickPlay');
        }, function(){
          $('.pro3')
            .slick('slickPause')
            .slick('slickGoTo',0);
    });
    $('.pro4').hover(function(){
      $('.pro4')
        .slick('slickPlay');
        }, function(){
          $('.pro4')
            .slick('slickPause')
            .slick('slickGoTo',0);
    });
    $('.pro5').hover(function(){
      $('.pro5')
        .slick('slickPlay');
        }, function(){
          $('.pro5')
            .slick('slickPause')
            .slick('slickGoTo',0);
    });
    $('.pro6').hover(function(){
      $('.pro6')
        .slick('slickPlay');
        }, function(){
          $('.pro6')
            .slick('slickPause')
            .slick('slickGoTo',0);
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > 720) {
            // Cuando se baja el Scroll
            $('header#index, aside#menu-moviles-idx').removeClass('no-sticky');
            $('header#index, aside#menu-moviles-idx').addClass('sticky');
        } else {
            // Cuando vuelve el Scroll a su valor inicial
            $('header#index, aside#menu-moviles-idx').removeClass('sticky');
            $('header#index, aside#menu-moviles-idx').addClass('no-sticky');
        }
    });
});
