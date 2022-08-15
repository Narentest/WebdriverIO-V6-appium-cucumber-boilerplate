class AndroidInfo {
    
    static deviceName() {
        return 'emulator-5554'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '10.0'; // pass the platform version
    }

    static appName() {
        return 'ApiDemos-debug.apk'; // pass the apk name
    }
}

export default AndroidInfo;
