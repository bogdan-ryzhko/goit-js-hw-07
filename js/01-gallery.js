import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

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

const getMurkupZoomImage = arr => {
	const galleryImageRef = arr.querySelectorAll('.gallery__link');

	return [...galleryImageRef].map(elem => {
		return `
		<div class="backdrop">
			<div class="backdrop-wrapper__image">
				<img class="backdrop__image" src="${elem.getAttribute('href')}" alt="${elem.description}">
			</div>
		</div>
		`
	})
};

console.log(getMurkupZoomImage(galleryRef));

const imageHandler = (event) => {
	event.preventDefault();
	const targetIMG = event.target;

	if (targetIMG.nodeName !== 'IMG') {
		return;
	}


}

// galleryRef.addEventListener('click', imageHandler);

// const galleryImageRef = document.querySelectorAll('.gallery__link');
