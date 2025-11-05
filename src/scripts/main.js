'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', () => {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }
  event.preventDefault();

  const bigSrc = link.href || link.dataset.preview;

  largeImg.src = bigSrc;
});
