'use strict';

(function () {
  window.colorize = {
    getRandomColorWizardElement: function (colorList) {
      var indexElementColor = window.similarWizards.getRandomIndex(colorList);
      return colorList[indexElementColor];
    },
    getEstablishedColorWizardElement: function (wizard, wizardParameter, colorList) {
      wizard[wizardParameter] = window.colorize.getRandomColorWizardElement(colorList);
      return wizard[wizardParameter];
    },
    colorizeWizardElement: function (wizadrElement, wizard, wizardParameter, colorList) {
      wizadrElement.style.fill = window.colorize.getEstablishedColorWizardElement(wizard, wizardParameter, colorList);
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
