import { isVisible, click, launchApp as _launchApp, switchToNativeContext, pause, waitForElement, clearText, sendText, getText } from './../helpers/actionHelpers';
require('chai').should();

class CelsiusToFahrenhietConvertorPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/celsiusToFahrenheitConvertor.screen.js`);
    }

    dismissAppRatingIfPresent() {
        if (isVisible(this.getObjectLocator().rateAppMessage)) {
            click(this.getObjectLocator().laterButton);
        }
    }

    launchApp() {
        _launchApp();
        switchToNativeContext();
        pause(10);
    }

    enterCelsius(celsiusValue) {
        this.dismissAppRatingIfPresent();
        waitForElement(this.getObjectLocator().celsiusTextField, 4);
        clearText(this.getObjectLocator().celsiusTextField);
        sendText(this.getObjectLocator().celsiusTextField, celsiusValue);
        click(this.getObjectLocator().submitButton);
    }

    verifyFahrenheitValue(fahrenheitValue) {
        waitForElement(this.getObjectLocator().fahrenheitTextField, 4);
        getText(this.getObjectLocator().fahrenheitTextField).should.equal(fahrenheitValue);
    }
}

export default CelsiusToFahrenhietConvertorPage;
