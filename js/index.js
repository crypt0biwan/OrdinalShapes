document.querySelectorAll('.card-img-top').forEach((el) => {
	el.setAttribute('data-src', `${window.location.href}${el.getAttribute('src')}`)
	el.setAttribute('data-toggle', 'lightbox')

	el.addEventListener('click', (e) => {
		e.preventDefault();

		const lightbox = new Lightbox(el, {
			keyboard: true,
			size: 'fullscreen'
		});

		lightbox.show();		
	})
});