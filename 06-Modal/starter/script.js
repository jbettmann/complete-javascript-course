'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const handleOpen = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const handleClose = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModal.forEach(modal => modal.addEventListener('click', handleOpen));
btnCloseModal.addEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    handleClose();
  }
});
