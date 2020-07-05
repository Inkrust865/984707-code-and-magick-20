'use strict';

(function () {
  var WIZARD_COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var WIZARD_EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };
  var inputWizardCoat = document.querySelector('input[name="coat-color"]');
  var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
  var inputFireball = document.querySelector('input[name="fireball-color"]');

  window.wizardModule = {
    SetupWizardCoatClick: function () {
      window.colorize.colorizeButton(WIZARD_COAT_COLOR, window.setup.setupWizardCoat, inputWizardCoat, wizard.onCoatChange);
    },
    SetupWizardEyesClick: function () {
      window.colorize.colorizeButton(WIZARD_EYES_COLOR, window.setup.setupWizardEyes, inputWizardEyes, wizard.onEyesChange);
    },
    SetupFireballClick: function () {
      window.colorize.colorizeButton(FIREBALL_COLOR, window.setup.setupFireball, inputFireball);
    }
  };

  window.setup.setupWizardCoat.addEventListener('click', window.wizardModule.SetupWizardCoatClick);
  window.setup.setupWizardEyes.addEventListener('click', window.wizardModule.SetupWizardEyesClick);
  window.setup.setupFireball.addEventListener('click', window.wizardModule.SetupFireballClick);

  window.wizard = wizard;
  return window.wizard;
})();
