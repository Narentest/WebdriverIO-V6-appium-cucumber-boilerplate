import { launchApp as _launchApp, switchToNativeContext, pause, getText } from './../helpers/actionHelpers';
require('chai').should();

class SettingsPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/settings.screen.js`);
    }

    launchApp() {
        _launchApp();
        switchToNativeContext();
        pause(2);
    }

    verifyGeneralLabel() {
        getText(this.getObjectLocator().general).should.equal('General');
    }
}

export default SettingsPage;
