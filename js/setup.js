'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupWizard = userDialog.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = userDialog.querySelector('.setup-fireball-wrap');
var wizardCoatInput = userDialog.querySelector('input[name=coat-color]');
var wizardEyesInput = userDialog.querySelector('input[name=eyes-color]');
var fireballInput = fireball.querySelector('input[name=fireball-color]');
var userNameInput = userDialog.querySelector('.setup-user-name');

var getRandomElement = function (array) {
	return array[Math.floor(Math.random() * array.length)];
};

var getFullName = function (name, surname) {
	if (Math.round(Math.random())) {
		return surname + ' ' + name;
	}

	return name + ' ' + surname;
};

var generateMockWizard = function () {
	return {
		name: getFullName(getRandomElement(WIZARD_NAMES), getRandomElement(WIZARD_SURNAMES)),
		coatColor: getRandomElement(COAT_COLORS),
		eyesColor: getRandomElement(EYES_COLORS),
	};
};

var generateMockWizards = function (count) {
	var wizards = [];

	for (var i = 0; i < count; i++) {
		wizards.push(generateMockWizard());
	}

	return wizards;
};

var renderWizard = function (wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return wizardElement;
};

var renderSimilarWizards = function (wizards) {
	var fragment = document.createDocumentFragment();

	for (var i = 0; i < wizards.length; i++) {
		fragment.appendChild(renderWizard(wizards[i]));
	}

	similarListElement.appendChild(fragment);
};

var popupEscPressHandler = function (evt) {
	if (evt.target.className !== 'setup-user-name') {
		if (evt.keyCode === ESC_KEYCODE) {
			closePopup();
		}
	}
};

var wizardCoatClickHandler = function () {
	var color = getRandomElement(COAT_COLORS);
	wizardCoat.style.fill = color;
	wizardCoatInput.value = color;
};

var wizardEyesClickHandler = function () {
	var color = getRandomElement(EYES_COLORS);
	wizardEyes.style.fill = color;
	wizardEyesInput.value = color;
};

var fireballClickHandler = function () {
	var color = getRandomElement(FIREBALL_COLORS);
	fireball.style.backgroundColor = color;
	fireballInput.value = color;
};

var userNameInputInvalidHandler = function () {
	if (userNameInput.validity.tooShort) {
		userNameInput.setCustomValidity('Имя должно состоять из 2-х символов');
	} else if (userNameInput.validity.tooLong) {
		userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
	} else if (userNameInput.validity.valueMissing) {
		userNameInput.setCustomValidity('Обязательное поле');
	} else {
		userNameInput.setCustomValidity('');
	}
};

var openPopup = function () {
	userDialog.querySelector('.setup-similar').classList.remove('hidden');
	userDialog.classList.remove('hidden');
	document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
	userDialog.classList.add('hidden');
	document.removeEventListener('keydown', popupEscPressHandler);
};

setupOpen.addEventListener('click', function () {
	openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
});

setupClose.addEventListener('click', function () {
	closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		closePopup();
	}
});

var wizards = generateMockWizards(WIZARD_COUNT);
renderSimilarWizards(wizards);

userNameInput.addEventListener('invalid', userNameInputInvalidHandler);
wizardCoat.addEventListener('click', wizardCoatClickHandler);
wizardEyes.addEventListener('click', wizardEyesClickHandler);
fireball.addEventListener('click', fireballClickHandler);
