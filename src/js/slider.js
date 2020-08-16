import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

const swiper = new Swiper(`.header__swiper-container`, {
  direction: `vertical`,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
  },
})
