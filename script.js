const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnForward = document.querySelectorAll(".slider-button_direction_forward");
const btnBack = document.querySelectorAll(".slider-button_direction_back");

//Слайдер
sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('slider-display_none');
// добавляем индекс
	slide.dataset.index = index;
	sliderItems[0].setAttribute('data-active', '')

});

// кнопка вперед
btnForward.forEach(function(buttons) {
	buttons.onclick = function () {
	showNextSlide('next');
	}
});


// кнопка назад
btnBack.forEach(function(buttons) {
	buttons.onclick = function () {
		showNextSlide('prev');
	}
});

//функция действий со слайдами
function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('slider-display_none');
	currentSlide.removeAttribute('data-active');

	// Рассчитываем след индекс в зависимости от направления движения
	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}
	// Показываем след слайд
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('slider-display_none');
	nextSlide.setAttribute('data-active', '');
};


// Раскрытие меню

const btnMenu = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");
const btnArrow = document.querySelectorAll(".menu__arrow");
const menuMob = document.querySelector(".menu__mobile");

btnMenu.addEventListener('click', function() {
	menu.classList.toggle('menu_opened');
});

// Функция раскрытия пунктов в мобильном меню 
function openMobileMenu(menu) {
	menu.classList.toggle('menu__mobile_opened');
};

// Раскрытие пунктов в мобильном меню при клике на стрелку
btnArrow.forEach(function(button) {
	button.addEventListener('click', function() {
		openMobileMenu(menuMob);
	})
});
