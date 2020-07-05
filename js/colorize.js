'use strict';

(function () {
  window.colorize = {
    getRandomColorWizardElement: function (colorList) {
      var indexElementColor = window.util.getRandomIndex(colorList);
      return colorList[indexElementColor];
    },
    getEstablishedColorWizardElement: function (wizard, wizardParameter, colorList) {
      wizard[wizardParameter] = window.colorize.getRandomColorWizardElement(colorList);
      return wizard[wizardParameter];
    },
    colorizeWizardElement: function (wizadrElement, wizard, wizardParameter, colorList) {
      wizadrElement.style.fill = window.colorize.getEstablishedColorWizardElement(wizard, wizardParameter, colorList);
    },
    colorizeButton: function (colorList, element, inputElement, onElementChange) {
      var elementColor = colorList[window.util.getRandomIndex(colorList)];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.background = elementColor;
      } else {
        element.style.fill = elementColor;
        onElementChange(elementColor);
      }
      inputElement.value = elementColor;
    }
  };
})();
