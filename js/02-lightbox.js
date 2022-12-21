import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const getMurkupImages = arr => {
	return arr.map(({ preview, original, description }) => {
		return `<a class="gallery__item" href="${original}">
						<img class="gallery__image" src="${preview}" alt="${description}" />
				</a>`
	}).join('');
};

galleryRef.insertAdjacentHTML('beforeend', getMurkupImages(galleryItems));

const imageHandler = (event) => {
	event.preventDefault();
	const targetIMG = event.target;

	if (targetIMG.nodeName !== 'IMG') {
		return;
	}

	new SimpleLightbox('.gallery a');
}

galleryRef.addEventListener('click', imageHandler);