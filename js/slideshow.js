document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.fade-image');
	let currentIndex = 0;

	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.remove('visible');
			if (i === index) {
				slide.classList.add('visible');
			}
		});
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
		showSlide(currentIndex);
	}

	showSlide(currentIndex);

	setInterval(nextSlide, 5000);
});
