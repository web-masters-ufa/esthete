'use strict';

import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation]);



document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  let modalSlider = document.querySelectorAll('.modal-gallery__slider');

  function sliderCollection (sliders) {
    sliders.forEach((elem, index) => {

      let type = document.querySelector(`.category-${index}`);
      let modal = document.querySelector(`.modal-container-gallery${index}`);
      let close = document.querySelector(`.modal-close${index}`);
      let portfolio = document.querySelector(`.portfolio${index}`);

      if (portfolio) {
        portfolio.addEventListener('click', () => {
          body.classList.toggle('overflow');
          modal.classList.toggle('modal-container--open');
        });
      }

      if (type) {
        type.addEventListener('click', () => {
          body.classList.toggle('overflow');
          modal.classList.toggle('modal-container--open');
        });
      }

      if (type || portfolio) {
        close.addEventListener('click', () => {
          body.classList.toggle('overflow');
          modal.classList.toggle('modal-container--open');
        });
      }

      new Swiper(elem, {
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
    })
  }

  sliderCollection(modalSlider);
});






