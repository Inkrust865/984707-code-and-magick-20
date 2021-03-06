'use strict';

(function () {
  window.similarWizards = {
    WIZARDS: [],
    WIZARD_COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    WIZARD_EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    getRandomIndex: function (array) {
      return Math.floor(Math.random() * array.length);
    }
  };
  //  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  //  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COUNT = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  //  var getRandomName = function (wizard) {
  //    var indexName = window.similarWizards.getRandomIndex(WIZARD_NAMES);
  //    var indexSurname = window.similarWizards.getRandomIndex(WIZARD_SURNAMES);
  //    wizard.name = WIZARD_NAMES[indexName] + ' ' + WIZARD_SURNAMES[indexSurname];
  //    return wizard.name;
  //  };

  var renderWizard = function (wizard) {
    var similarWizard = similarWizardTemplate.cloneNode(true);

    similarWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    similarWizard.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    similarWizard.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return similarWizard;
  };

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[window.similarWizards.getRandomIndex(wizards)]));
    }

    similarListElement.appendChild(fragment);

    window.setup.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onLoad, window.onError);
})();
