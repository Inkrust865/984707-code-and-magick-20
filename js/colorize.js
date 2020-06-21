'use strict';

(function () {
  window.colorize = {
    colorizeWizard: function (wizard, colorList) {
      var indexElementColor = window.data.getRandomIndex(colorList);
      wizard.fill = colorList[indexElementColor];
      return wizard.fill;
    },
    colorizeButton: function (colorList, element, inputElement) {
      var elementColor = colorList[window.data.getRandomIndex(colorList)];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.background = elementColor;
      } else {
        element.style.fill = elementColor;
      }
      inputElement.value = elementColor;
    }
  };
})();
