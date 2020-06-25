'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupWizard = document.querySelector('.setup-wizard');
  var inputWizardCoat = document.querySelector('input[name="coat-color"]');
  var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
  var inputFireball = document.querySelector('input[name="fireball-color"]');

  window.setup = {
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
    },
    SetupWizardCoatClick: function () {
      window.colorize.colorizeButton(window.similarWizards.WIZARD_COAT_COLOR, window.setup.setupWizardCoat, inputWizardCoat);
    },
    SetupWizardEyesClick: function () {
      window.colorize.colorizeButton(window.similarWizards.WIZARD_EYES_COLOR, window.setup.setupWizardEyes, inputWizardEyes);
    },
    SetupFireballClick: function () {
      window.colorize.colorizeButton(window.similarWizards.FIREBALL_COLOR, window.setup.setupFireball, inputFireball);
    }
  };

  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

