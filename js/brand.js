$(function () {
    /////////////////////jQB///////////////////////////
    var swiper = new Swiper(".brand_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
      });

}); /////////////////////jQB////////////////////////////
