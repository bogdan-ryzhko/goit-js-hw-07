import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const getMurkupImages = arr => {
	return arr.map(({ preview, original, description }) => {
		return `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
			class="gallery__image"
			src="${preview}"
			data-source="${preview}"
			alt="${description}"
			/>
		</a>
	</div>`
	}).join('');
};

galleryRef.insertAdjacentHTML('beforeend', getMurkupImages(galleryItems));

const imageHandler = (event) => {
	event.preventDefault();
	const targetIMG = event.target;

	if (targetIMG.nodeName !== 'IMG') {
		return;
	}

	const instance = basicLightbox.create(`
		<img src="${targetIMG.parentNode.getAttribute('href')}">
	`);

	instance.show();

	const lightbox = document.querySelector('.basicLightbox');

	if (lightbox) {
		window.addEventListener('keydown', (event) => {
			if (event.code !== 'Escape') {
				return;
			}

			instance.close();
		})
	}
}

galleryRef.addEventListener('click', imageHandler);