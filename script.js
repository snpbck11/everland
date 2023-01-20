const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnForward = document.querySelector(".social-project__arrow-forward");
const btnBack = document.querySelector(".social-project__arrow-back");


sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('social-project__slider-item_display-none');
   
// добавляем индекс
	slide.dataset.index = index;

	sliderItems[0].setAttribute('data-active', '')

	slide.addEventListener('click', function() {
		slide.classList.add('social-project__slider-item_display-none');
		slide.removeAttribute('data-active');

		let nextSlideIndex;
		if (index +1 === sliderItems.length) {
			nextSlideIndex=0;
		} else {
			nextSlideIndex = index +1;
		}

		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
		nextSlide.classList.remove('social-project__slider-item_display-none');
		nextSlide.setAttribute('data-active', '');
	});
});

btnForward.onclick = function () {
	console.log('nextSlide');
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	console.log(currentSlideIndex);

	let nextSlideIndex;
		if (currentSlideIndex +1 === sliderItems.length) {
			nextSlideIndex=0;
		} else {
			nextSlideIndex = currentSlideIndex +1;
		}
 
		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

		nextSlide.classList.remove('social-project__slider-item_display-none');
		nextSlide.setAttribute('data-active', '');

}

btnBack.onclick = function () {
	console.log('nextSlide');
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	console.log(currentSlideIndex);

	let nextSlideIndex;
		if (currentSlideIndex  === 0) {
			sliderItems.length - 1
		} else {
			nextSlideIndex = currentSlideIndex - 1;
		}
 
		const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

		nextSlide.classList.remove('social-project__slider-item_display-none');
		nextSlide.setAttribute('data-active', '');
	}