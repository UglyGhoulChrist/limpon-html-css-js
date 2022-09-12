$('.single-item').slick({
  infinite: true,
  autoplay: true,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  // adaptiveHeight:true,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 599.98,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$('.single-item_4').slick({
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  // adaptiveHeight:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});