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
    // arrows: true,
    // prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    // nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
  });
});
