'use strict';

(function () {
	var setupPlayer = document.querySelector('.setup-player');
	var wizardCoat = setupPlayer.querySelector('.wizard-coat');
	var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
	var fireball = setupPlayer.querySelector('.setup-fireball-wrap');
	var wizardCoatInput = setupPlayer.querySelector('input[name=coat-color]');
	var wizardEyesInput = setupPlayer.querySelector('input[name=eyes-color]');
	var fireballInput = fireball.querySelector('input[name=fireball-color]');

	var wizardCoatClickHandler = function () {
		var color = window.colorize.getCoatColor();
		wizardCoat.style.fill = color;
		wizardCoatInput.value = color;
	};

	var wizardEyesClickHandler = function () {
		var color = window.colorize.getEyesColor();
		wizardEyes.style.fill = color;
		wizardEyesInput.value = color;
	};

	var fireballClickHandler = function () {
		var color = window.colorize.getFireballColor();
		fireball.style.backgroundColor = color;
		fireballInput.value = color;
	};

	wizardCoat.addEventListener('click', wizardCoatClickHandler);
	wizardEyes.addEventListener('click', wizardEyesClickHandler);
	fireball.addEventListener('click', fireballClickHandler);
})();
