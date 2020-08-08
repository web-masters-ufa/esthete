import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation]);

const portfolioImages = document.querySelectorAll('.portfolio__item');
const closeModalGallery = document.querySelectorAll('.modal-gallery__close');
const body = document.querySelector('#body');
let galleryModal = document.querySelectorAll('.modal-container-gallery');

(function () {
  let modalSlider = document.querySelectorAll('.modal-gallery__slider')

  function sliderCollection (sliders) {
    sliders.forEach(elem => {
      new Swiper( elem, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: `.swiper-pagination`,
          clickable: true,
        },
      });
    })
  }

  sliderCollection(modalSlider);

})();

portfolioImages.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.toggle('overflow');
    galleryModal.forEach(item => {
      item.classList.toggle('modal-container--open');
    });
  });
});

closeModalGallery.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.toggle('overflow');
    galleryModal.forEach(item => {
      item.classList.toggle('modal-container--open');
    });
  });
});






