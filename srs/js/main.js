$(document).ready(function(){
    $("#home-slider").owlCarousel({    
        items: 1,
        loop: true,
    });
    $("#laminate-slider").owlCarousel({    
        items: 1,
        loop: true,
    });

    var certSlider = $('#certificates-slider');
    certSlider.owlCarousel({
        items:5,
        loop: true,
        margin:30,
     
    })
    $('.custom-prev_cert').click(function() {
        certSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-next_cert').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        certSlider.trigger('prev.owl.carousel', [300]);
    });
    //табы на странице
    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function() {
        $(this)
          .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
          .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
      });


      var productsSlider = $('.products-slider');
      productsSlider.owlCarousel({
        items:5,
        loop: true,
        dots: false,
        margin:30,
     
    })
    $('.custom-prev_prod').click(function() {
        productsSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-next_prod').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        productsSlider.trigger('prev.owl.carousel', [300]);
    });

  });
 