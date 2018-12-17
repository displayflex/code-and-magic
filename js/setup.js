'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');

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

var wizards = generateMockWizards(WIZARD_COUNT);

userDialog.classList.remove('hidden');
renderSimilarWizards(wizards);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
