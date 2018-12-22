'use strict';

(function () {
	var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
	var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
	var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

	var getCoatColor = function () {
		return window.random.getRandomElement(COAT_COLORS);
	};
	var getEyesColor = function () {
		return window.random.getRandomElement(EYES_COLORS);
	};
	var getFireballColor = function () {
		return window.random.getRandomElement(FIREBALL_COLORS);
	};

	window.colorize = {
		getCoatColor: getCoatColor,
		getEyesColor: getEyesColor,
		getFireballColor: getFireballColor
	};
})();
