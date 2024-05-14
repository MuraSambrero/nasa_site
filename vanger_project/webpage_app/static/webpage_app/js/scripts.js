$(document).on('ready', function() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    slidesPerRow: 5,
    asNavFor: '.slider-for',
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
  });

  $('img[data-enlargable]').addClass('img-enlargable').click(function(){
    const src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
  });
});

