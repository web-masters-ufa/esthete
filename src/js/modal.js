const body = document.getElementById('body');
const consultationButtons = document.getElementsByClassName('btn-consultation');
const modalForm = document.getElementById('modal-one');
const closeModalButton = document.querySelectorAll('.modal__btn-close-consultation');

for (let i = 0; i < consultationButtons.length; i++) {
  consultationButtons[i].addEventListener('click', () => {
    body.classList.toggle('overflow');
    modalForm.classList.toggle('modal-container--open');
  });
}

closeModalButton.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.toggle('overflow');
    modalForm.classList.toggle('modal-container--open');
  });
});
