var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Carousel Berita index.html
var swiper = new Swiper('.swiper-article',{
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// Carousel games.html
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    });