const slider = document.querySelectorAll(".slider");


slider.forEach(function(item) {
	const sliderItems = Array.from(item.children);
	sliderItems.forEach(function (slide, index) {
		// Скрываем все слайды, кроме первого
		if (index !== 0) slide.classList.add('slider-display_none');
	// добавляем индекс
		slide.dataset.index = index;
		sliderItems[0].setAttribute('data-active', '')
	});
	console.log(sliderItems);
	const btnForward = document.querySelectorAll(".slider-button_direction_forward");
    const btnBack = document.querySelectorAll(".slider-button_direction_back");
// кнопка вперед
btnForward.forEach(function(buttons) {
	buttons.onclick = function () {
	showNextSlide('next');
	console.log('next');
	}
});


// кнопка назад
btnBack.forEach(function(buttons) {
	buttons.onclick = function () {
		showNextSlide('prev');
	}
});

function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = document.querySelectorAll('[data-active]');

	currentSlide.forEach(function(item) {
		const currentSlideIndex = +item.dataset.index;
	item.classList.add('slider-display_none');
	item.removeAttribute('data-active');
	console.log(currentSlideIndex);

	let nextSlideIndex = 0;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}
	console.log(nextSlideIndex);
	const nextSlide = document.querySelectorAll(`[data-index="${nextSlideIndex}"]`);
	console.log(nextSlide);
	nextSlide.forEach(function(item) {
		item.classList.remove('slider-display_none');
	item.setAttribute('data-active', '');
	});
    });
};
});

// Раскрытие меню
const btnMenu = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");
const btnArrow = document.querySelectorAll(".menu__arrow");
const burger = document.querySelector(".header__burger");

btnMenu.addEventListener('click', function() {
	menu.classList.toggle('menu_opened');
  burger.classList.toggle('header__burger_active');
});



//  Раскрытие пунктов в моб меню
btnArrow.forEach((item) =>
item.addEventListener("click", ({ target }) => {
	target
		.closest(".menu__items")
		.querySelectorAll(".menu__arrow")
		.forEach((item) => {
			item.classList.toggle("menu__arrow_active");
		});
	target
		.closest(".menu__items")
		.querySelectorAll(".menu__mobile")
		.forEach(function (item) {
			item.classList.toggle("menu__mobile_opened");
		});
})
);


// СЕКЦИЯ MAIN-IN-WORK //

// Поворачивает кнопку при нажатии на кнопку

document.querySelectorAll(".main-in-work__button").forEach((item) =>
item.addEventListener("click", ({ target }) => {
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__button")
		.forEach((item) => {
			item.classList.toggle("main-in-work__button_active");
		});
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__button")
		.forEach(function (item) {
			item.classList.toggle("main-in-work__button_active");
		});
})
);

// Открывает аккордеон и поворачивает кнопку при открытии аккордеона

document.querySelectorAll(".main-in-work__wrapper").forEach((item) =>
item.addEventListener("click", ({ target }) => {
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__button")
		.forEach((item) => {
			item.classList.toggle("main-in-work__button_active");
		});
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__description")
		.forEach(function (item) {
			item.classList.toggle("main-in-work__description_active");
		});
})
);

