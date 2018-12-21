'use strict';

(function () {
	var WIZARD_COUNT = 4;

	var similarListElement = document.querySelector('.setup-similar-list');
	var similarWizardTemplate = document.querySelector('#similar-wizard-template')
		.content
		.querySelector('.setup-similar-item');

	var generateMockWizard = function () {
		return {
			name: window.random.getRandomName(),
			coatColor: window.colorize.getCoatColor(),
			eyesColor: window.colorize.getEyesColor()
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
	renderSimilarWizards(wizards);
})();
