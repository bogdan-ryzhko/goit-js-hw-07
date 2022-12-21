import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const getMurkupImages = arr => {
	return arr.map(({ preview, original, description }) => {
		return `<a class="gallery__item" href="${original}">
						<img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
				</a>`
	}).join('');
};

galleryRef.insertAdjacentHTML('beforeend', getMurkupImages(galleryItems));

const options = {
	captionDelay: 250,
}

let lightbox = new SimpleLightbox('.gallery .gallery__item', options);

const imageHandler = (event) => {
	event.preventDefault();
	const targetIMG = event.target;

	if (targetIMG.nodeName !== 'IMG') {
		return;
	}

	lightbox;
}

galleryRef.addEventListener('click', imageHandler);