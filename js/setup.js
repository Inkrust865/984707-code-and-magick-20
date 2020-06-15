'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = document.querySelector('.setup-close');
var inputUserName = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var inputWizardCoat = document.querySelector('input[name="coat-color"]');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var inputFireball = document.querySelector('input[name="fireball-color"]');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var onPopupEscPress = function (evt) {
  if (document.activeElement !== inputUserName) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  inputUserName.addEventListener('invalid', onInputUserNameInvalid);
  inputUserName.addEventListener('input', onInputUserNameInput);
  setupWizardCoat.addEventListener('click', onSetupWizardCoatClick);
  setupWizardEyes.addEventListener('click', onSetupWizardEyesClick);
  setupFireball.addEventListener('click', onSetupFireballClick);
  userDialogClose.addEventListener('click', closePopup);
  userDialogClose.addEventListener('keydown', onUserDialogCloseEnterPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  inputUserName.removeEventListener('invalid', onInputUserNameInvalid);
  inputUserName.removeEventListener('input', onInputUserNameInput);
  setupWizardCoat.removeEventListener('click', onSetupWizardCoatClick);
  setupWizardEyes.removeEventListener('click', onSetupWizardEyesClick);
  setupFireball.removeEventListener('click', onSetupFireballClick);
  userDialogClose.removeEventListener('keydown', onUserDialogCloseEnterPress);
  userDialogClose.removeEventListener('click', closePopup);
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

var onUserDialogCloseEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
};

var onInputUserNameInvalid = function () {
  if (inputUserName.validity.tooShort) {
    inputUserName.setCustomValidity('Имя должно состоять минимум из 2-ч символов');
  } else if (inputUserName.validity.tooLong) {
    inputUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (inputUserName.validity.valueMissing) {
    inputUserName.setCustomValidity('Обязательное поле!!!');
  } else {
    inputUserName.setCustomValidity('');
  }
};

var onInputUserNameInput = function () {
  var valueLength = inputUserName.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    inputUserName.setCustomValidity('Еще ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    inputUserName.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    inputUserName.setCustomValidity('');
  }
};

var onSetupWizardCoatClick = function () {
  var coatColor = WIZARD_COAT_COLOR[getRandomIndex(WIZARD_COAT_COLOR)];
  setupWizardCoat.style.fill = coatColor;
  inputWizardCoat.value = coatColor;
};

var onSetupWizardEyesClick = function () {
  var eyesColor = WIZARD_EYES_COLOR[getRandomIndex(WIZARD_EYES_COLOR)];
  setupWizardEyes.style.fill = eyesColor;
  inputWizardEyes.value = eyesColor;
};

var onSetupFireballClick = function () {
  var fireballColor = FIREBALL_COLOR[getRandomIndex(FIREBALL_COLOR)];
  setupFireball.style.backgroundColor = fireballColor;
  inputFireball.value = fireballColor;
};

var getRandomIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getRandomName = function (wizardIndex) {
  var indexName = getRandomIndex(WIZARD_NAMES);
  var indexSurname = getRandomIndex(WIZARD_SURNAMES);
  Wizards[wizardIndex].name = WIZARD_NAMES[indexName] + ' ' + WIZARD_SURNAMES[indexSurname];
  return Wizards[wizardIndex].name;
};

var getRandomCoatColor = function (wizardIndex) {
  var indexCoatColor = getRandomIndex(WIZARD_COAT_COLOR);
  Wizards[wizardIndex].coatColor = WIZARD_COAT_COLOR[indexCoatColor];
  return Wizards[wizardIndex].coatColor;
};

var getRandomEyesColor = function (wizardIndex) {
  var indexEyesColor = getRandomIndex(WIZARD_EYES_COLOR);
  Wizards[wizardIndex].eyesColor = WIZARD_EYES_COLOR[indexEyesColor];
  return Wizards[wizardIndex].eyesColor;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomName(wizard);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomCoatColor(wizard);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomEyesColor(wizard);

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_COUNT; i++) {
  var Wizards = [];
  Wizards[i] = {};
  fragment.appendChild(renderWizard(i));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
