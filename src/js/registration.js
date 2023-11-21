const inputDate = document.querySelector('.registration__form-input--date');
const inputQuestion = document.querySelector('.registration__form-textarea');
const registrationForm = document.querySelector('.registration__form');
const arrayInput = document.querySelectorAll('.registration__form-input');
const registrationBtn = document.querySelector('.proposal__btn');
const registrationWindow = document.querySelector('.registration');
const registrationBtnClose = document.querySelector('.registration__btn');
const loader = document.querySelector('.loader');
const loaderBackground = document.querySelector('.loader__background');

inputDate.addEventListener('input', () => {
	if (inputDate.value.trim().length > 0) {
		inputDate.value = 'Ждём в любое время';
	}
})

inputQuestion.addEventListener('input', () => {
	if (inputQuestion.value.trim().length > 0) {
		inputQuestion.value = 'Пиши в телегу';
	}
})

registrationForm.addEventListener('submit', (event) => {
	event.preventDefault();
	checkValue();

	let arrayInputBooll = Array.from(arrayInput).every(elem => {
		return !elem.classList.contains("registration__form-input--active");
	})

	if (!arrayInputBooll) {

	} else {
		sendFormData();
	}
});

async function sendFormData() {
	toggleLoaderClass()
	let response = await fetch('sendmail.php', {
		method: 'POST',
		body: new FormData(registrationForm)
	});

	if (response.ok) {
		toggleLoaderClass();
		registrationForm.reset();
		alert("Отлично, письмо отправлено");
	} else {
		toggleLoaderClass();
		alert("Ошибка, запрос не фурычит, приезжай и всё обусдим");
	}
}

function checkValue() {
	arrayInput.forEach((element) => {
		const id = element.getAttribute("id");
		if (id !== "question") {
			if (element.value.trim() === '' || element.value.trim() === null) {
				addFormElemActiveClass(element)
			}
		}
		element.addEventListener('input', () => {
			switch (id) {
				case "name":
					checkValueInput(element);
					break;
				case "surname":
					checkValueInput(element);
					break;
				case "date":
					checkValueInput(element);
					element.value = 'Похуй, ждём в любое';
					break;
			}
		})
	});
}

function registrationBtnsClick() {
	registrationBtn.addEventListener('click', () => {
		registrationWindow.classList.add('registration--active');
	})

	registrationBtnClose.addEventListener('click', () => {
		registrationForm.reset();
		arrayInput.forEach((element) => {
			element.previousElementSibling.classList.remove('registration__form-label--active');
			element.classList.remove('registration__form-input--active');
		})
		registrationWindow.classList.remove('registration--active');
	})
}
registrationBtnsClick()

function addFormElemActiveClass(element) {
	element.previousElementSibling.classList.add('registration__form-label--active');
	element.classList.add('registration__form-input--active');
}

function removeFormElemActiveClass(element) {
	element.previousElementSibling.classList.remove('registration__form-label--active');
	element.classList.remove('registration__form-input--active');
}

function toggleLoaderClass() {
	loader.classList.toggle("loader--active");
	registrationForm.classList.toggle("registration__form--active");
	loaderBackground.classList.toggle("loader__background--active");
}

function checkValueInput(element) {
	if (element.value.trim() === '' || element.value.trim() === null) {
		addFormElemActiveClass(element);
	} else {
		removeFormElemActiveClass(element);
	}
}
