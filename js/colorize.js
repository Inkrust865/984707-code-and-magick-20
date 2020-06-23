'use strict';

(function () {
  window.colorize = {
    getRandomColorWizardElement: function (wizard, wizardParameter, colorList) {
      var indexElementColor = window.similarWizards.getRandomIndex(colorList);
      wizard.wizardParameter = colorList[indexElementColor];
      return wizard.wizardParameter;
    },
    colorizeWizardElement: function (wizadrElement, wizard, wizardParameter, colorList) {
      wizadrElement.style.fill = window.colorize.getRandomColorWizardElement(wizard, wizardParameter, colorList);
    },
    colorizeButton: function (colorList, element, inputElement) {
      var elementColor = colorList[window.similarWizards.getRandomIndex(colorList)];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.background = elementColor;
      } else {
        element.style.fill = elementColor;
      }
      inputElement.value = elementColor;
    }
  };
})();
