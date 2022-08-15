//let {join} = require('path');
const {config} = require('./wdio.conf');
import { deviceName as _deviceName, platFormVersion, appName } from './android.info';
import { resolve } from 'path';

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        noReset: true,
        fullReset: false,
        maxInstances: 1,
        automationName: 'uiautomator2',
        deviceName: _deviceName(),
        platformVersion: platFormVersion(),
        app: resolve(`./apps/${appName()}`)
        //        app: join(process.cwd(),resolve,`./apps/${appName()}`)

    }
];

//config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

export const config = config;
