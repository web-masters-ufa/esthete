import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation])

const portfolioImages = document.getElementsByClassName('portfolio__item');
const galleryModal = document.getElementById('gallery');
const closeModalGallery = document.getElementById('close-modal-gallery');
const body = document.getElementById('body');

const swiper1 = new Swiper(`.modal-gallery__slider`, {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
  },
})

for (let i = 0; i < portfolioImages.length; i++) {
  portfolioImages[i].addEventListener('click', () => {
    body.classList.toggle('overflow');
    galleryModal.classList.toggle('modal-container--open');
  })
}

closeModalGallery.addEventListener('click', () => {
  body.classList.toggle('overflow');
  galleryModal.classList.toggle('modal-container--open');
})






