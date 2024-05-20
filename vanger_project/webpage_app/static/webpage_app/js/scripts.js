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

  const lightbox = GLightbox({
    selector: "[data-gallery='gallery']",
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
  });
  lightbox.open();
});

