// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);
// console.log(simplelightbox);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a href="${original}" class="gallery__item">
      <img src="${preview}" alt="${description}" class="gallery__image" loading data-source="${original}"
      title="${description}">
      </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
