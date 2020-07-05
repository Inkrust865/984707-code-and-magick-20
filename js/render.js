'use strict';

(function () {
  var MAX_WIZARDS_COUNT = 4;
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var similarWizard = similarWizardTemplate.cloneNode(true);

    similarWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    similarWizard.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    similarWizard.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return similarWizard;
  };

  window.render = function (data) {
    var takeNumber = data.length > MAX_WIZARDS_COUNT ? MAX_WIZARDS_COUNT : data.length;
    similarList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    window.setup.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
