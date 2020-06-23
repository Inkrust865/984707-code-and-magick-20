'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = document.querySelector('.setup-close');
  var startUserDialog = {
    x: 50,
    y: 80
  };

  var onPopupEscPress = function (evt) {
    if (document.activeElement !== window.setup.inputUserName) {
      window.util.onEscPress(evt, closePopup);
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    window.setup.inputUserName.addEventListener('invalid', window.setup.InputUserNameInvalid);
    window.setup.inputUserName.addEventListener('input', window.setup.InputUserNameInput);
    window.setup.setupWizardCoat.addEventListener('click', window.setup.SetupWizardCoatClick);
    window.setup.setupWizardEyes.addEventListener('click', window.setup.SetupWizardEyesClick);
    window.setup.setupFireball.addEventListener('click', window.setup.SetupFireballClick);
    userDialogClose.addEventListener('click', closePopup);
    userDialogClose.addEventListener('keydown', onUserDialogCloseEnterPress);

  };

  var closePopup = function () {
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    window.setup.inputUserName.removeEventListener('invalid', window.setup.InputUserNameInvalid);
    window.setup.inputUserName.removeEventListener('input', window.setup.InputUserNameInput);
    window.setup.setupWizardCoat.removeEventListener('click', window.setup.SetupWizardCoatClick);
    window.setup.setupWizardEyes.removeEventListener('click', window.setup.SetupWizardEyesClick);
    window.setup.setupFireball.removeEventListener('click', window.setup.SetupFireballClick);
    userDialogClose.removeEventListener('keydown', onUserDialogCloseEnterPress);
    userDialogClose.removeEventListener('click', closePopup);

    userDialog.style.top = startUserDialog.y + 'px';
    userDialog.style.left = startUserDialog.x + '%';
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.onEnterPress(evt, openPopup);
  });

  var onUserDialogCloseEnterPress = function (evt) {
    window.util.onEnterPress(evt, closePopup);
  };
})();
