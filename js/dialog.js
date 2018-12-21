'use strict';

(function () {
	var USER_DIALOG_INITIAL_TOP = '80px';
	var USER_DIALOG_INITIAL_LEFT = '50%';

	var userDialog = document.querySelector('.setup');
	var setupOpen = document.querySelector('.setup-open');
	var setupClose = userDialog.querySelector('.setup-close');
	var userNameInput = userDialog.querySelector('.setup-user-name');
	var dialogHandle = userDialog.querySelector('.upload');

	var popupEscPressHandler = function (evt) {
		if (evt.target.className !== 'setup-user-name') {
			window.util.isEscEvent(evt, closePopup);
		}
	};

	var openPopup = function () {
		userDialog.style.left = USER_DIALOG_INITIAL_LEFT;
		userDialog.style.top = USER_DIALOG_INITIAL_TOP;
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
		window.util.isEnterEvent(evt, openPopup);
	});

	setupClose.addEventListener('click', function () {
		closePopup();
	});

	setupClose.addEventListener('keydown', function (evt) {
		window.util.isEnterEvent(evt, closePopup);
	});

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

	var setupUserPicMouseDownHandler = function (evt) {
		evt.preventDefault();

		var dragged = false;

		var startCoords = {
			x: evt.clientX,
			y: evt.clientY
		};

		var mouseMoveHandler = function (moveEvt) {
			moveEvt.preventDefault();

			dragged = true;

			var shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY,
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY,
			};

			userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
			userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
		};

		var mouseUpHandler = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mouseup', mouseUpHandler);

			if (dragged) {
				var clickPreventDefaultHandler = function (dragEvt) {
					dragEvt.preventDefault();
					dialogHandle.removeEventListener('click', clickPreventDefaultHandler);
				};

				dialogHandle.addEventListener('click', clickPreventDefaultHandler);
			}
		};

		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mouseup', mouseUpHandler);
	};

	userNameInput.addEventListener('invalid', userNameInputInvalidHandler);
	dialogHandle.addEventListener('mousedown', setupUserPicMouseDownHandler);
})();
