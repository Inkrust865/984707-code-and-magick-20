'use strict';

(function () {
  window.data = {
    WIZARDS: [],
    WIZARD_COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    WIZARD_EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    getRandomIndex: function (array) {
      return Math.floor(Math.random() * array.length);
    }
  };
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COUNT = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomName = function (wizard) {
    var indexName = window.data.getRandomIndex(WIZARD_NAMES);
    var indexSurname = window.data.getRandomIndex(WIZARD_SURNAMES);
    wizard.name = WIZARD_NAMES[indexName] + ' ' + WIZARD_SURNAMES[indexSurname];
    return wizard.name;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = getRandomName(wizard);
    wizardElement.querySelector('.wizard-coat').style.fill = window.colorize.colorizeWizard(wizard, window.data.WIZARD_COAT_COLOR, 'coatColor');
    wizardElement.querySelector('.wizard-eyes').style.fill = window.colorize.colorizeWizard(wizard, window.data.WIZARD_EYES_COLOR, 'eyesColor');

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    window.data.WIZARDS[i] = {};
    fragment.appendChild(renderWizard(window.data.WIZARDS[i]));
  }
  similarListElement.appendChild(fragment);
})();
