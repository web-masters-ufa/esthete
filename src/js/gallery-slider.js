import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation]);

const portfolioImages = document.getElementsByClassName('portfolio__item');
const closeModalGallery = document.getElementsByClassName('modal-gallery__close');
const body = document.getElementById('body');

for (let i = 0; i < portfolioImages.length; i++) {
  let galleryID = `gallery${i+1}`;
  let galleryModal = document.getElementById(`${galleryID}`);

  new Swiper( `.modal-gallery__slider${i+1}`, {
    slidesPerView: 1,
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

  portfolioImages[i].addEventListener('click', () => {
    body.classList.toggle('overflow');
    galleryModal.classList.toggle('modal-container--open');
  })

  closeModalGallery[i].addEventListener('click', () => {
    body.classList.toggle('overflow');
    galleryModal.classList.toggle('modal-container--open');
  })
};






