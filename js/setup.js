'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');

  window.setup = {
    userDialog: document.querySelector('.setup'),
    inputUserName: document.querySelector('.setup-user-name'),
    setupWizardCoat: setupWizard.querySelector('.wizard-coat'),
    setupWizardEyes: setupWizard.querySelector('.wizard-eyes'),
    setupFireball: document.querySelector('.setup-fireball-wrap'),
    InputUserNameInvalid: function () {
      if (window.setup.inputUserName.validity.tooShort) {
        window.setup.inputUserName.setCustomValidity('Имя должно состоять минимум из 2-ч символов');
      } else if (window.setup.inputUserName.validity.tooLong) {
        window.setup.inputUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
      } else if (window.setup.inputUserName.validity.valueMissing) {
        window.setup.inputUserName.setCustomValidity('Обязательное поле!!!');
      } else {
        window.setup.inputUserName.setCustomValidity('');
      }
    },
    InputUserNameInput: function () {
      var valueLength = window.setup.inputUserName.value.length;

      if (valueLength < MIN_NAME_LENGTH) {
        window.setup.inputUserName.setCustomValidity('Еще ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
      } else if (valueLength > MAX_NAME_LENGTH) {
        window.setup.inputUserName.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
      } else {
        window.setup.inputUserName.setCustomValidity('');
      }
    }
  };

  var form = window.setup.userDialog.querySelector('.setup-wizard-form');
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var onLoad = function () {
    window.setup.userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onLoad, window.onError);
    evt.preventDefault();
  });
})();

