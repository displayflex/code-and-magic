'use strict';

(function () {
	var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
	var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

	window.random = {
		getRandomElement: function (array) {
			return array[Math.floor(Math.random() * array.length)];
		},

		getRandomName: function () {
			var name = this.getRandomElement(WIZARD_NAMES);
			var surname = this.getRandomElement(WIZARD_SURNAMES);

			if (Math.round(Math.random())) {
				return surname + ' ' + name;
			}

			return name + ' ' + surname;
		}
	};
})();
