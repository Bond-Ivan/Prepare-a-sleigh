const swiperInfo = new Swiper(".mySwiper", {
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 30,
	centerSlides: true,
	freeMode: true,
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: false,
	},
});

const swiper = new Swiper('.swiper', {
	direction: 'vertical',
	slidesPerView: 1,
	loop: true,
	allowTouchMove: false,
	simulateTouch: false,
	centeredSlides: true,
	speed: 700,  // Adjust this value to influence swipe speed
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChange: function () {
			const currentSlide = this.slides[this.activeIndex];
			currentSlide.scrollTop = 0;
		}
	},
});

const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');


nextButton.addEventListener('click', () => {
	swiper.slideNext();

});

prevButton.addEventListener('click', () => {
	swiper.slidePrev();

});




