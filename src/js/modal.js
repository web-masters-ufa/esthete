const body = document.getElementById('body');
const consultationButtons = document.getElementsByClassName('btn-consultation');
const modalForm = document.getElementById('modal-one');
const closeModalButton = document.getElementById('close-modal');

for (let i = 0; i < consultationButtons.length; i++) {
  consultationButtons[i].addEventListener('click', () => {
    body.classList.toggle('overflow');
    modalForm.classList.toggle('modal-container--open');
  });
}

closeModalButton.addEventListener('click', () => {
  body.classList.toggle('overflow');
  modalForm.classList.toggle('modal-container--open');
});
