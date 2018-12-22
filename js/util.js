'use strict';

(function () {
	var ESC_KEYCODE = 27;
	var ENTER_KEYCODE = 13;

	var isEscEvent = function (evt, action) {
		if (evt.keyCode === ESC_KEYCODE) {
			action();
		}
	};

	var isEnterEvent = function (evt, action) {
		if (evt.keyCode === ENTER_KEYCODE) {
			action();
		}
	};

	var renderErrorMessage = function (errorMessage) {
		var node = document.createElement('div');
		node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
		node.style.position = 'absolute';
		node.style.left = 0;
		node.style.right = 0;
		node.style.fontSize = '30px';
		node.textContent = errorMessage;
		document.body.insertAdjacentElement('afterbegin', node);
	};

	window.util = {
		isEscEvent: isEscEvent,
		isEnterEvent: isEnterEvent,
		renderErrorMessage: renderErrorMessage
	};
})();
