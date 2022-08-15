import { appBtn, alertDialogBtn, textEntryDialogBtn, userNameField, passwordField, dialogOkBtn, viewBtn, tabsBtn, contentByIdBtn, tabs, tab1Details, tab2Details, tab3Details, repeatAlarmBtn, _weekdayCheckbox } from '../../pages/dialog.page';
import { expect } from 'chai';

describe('Dialog', ()=>{
    // Execute a block of code before every test
    beforeEach(() => {
    });

    it('Verify that the text entry dialog username & password fields are editable', ()=>{
        appBtn.click();
        alertDialogBtn.click();
        textEntryDialogBtn.click();

        userNameField.addValue("Test User");
        userNameField.clearValue();
        userNameField.addValue("Actual User");

        passwordField.clearValue();
        passwordField.addValue("Test Pass");

        let text = userNameField.getText();
        console.log(text);
        expect(text).equal("Actual User");

        dialogOkBtn.click();
    });

    it('Verify that the app adjust when orientation is switched', () => {
        console.log(driver.getOrientation());
        driver.setOrientation('LANDSCAPE');

        driver.saveScreenshot('./screenshots/landscape.png');
        appBtn.click();

        driver.setOrientation('PORTRAIT');
        driver.back();
        driver.saveScreenshot('./screenshots/portrait.png');
    });

    it('Verify isSelected, isEnabled & isDisplayed', () => {
        viewBtn.click();
        driver.touchAction([
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release'
        ])

        tabsBtn.click();
        contentByIdBtn.click();

        let isEnabled, isSelected, isDisplayed;

        for(i=0; i<3; i++){
            isEnabled = tabs[i].isEnabled();
            isSelected = tabs[i].isSelected();
            isDisplayed = tabs[i].isDisplayed();
    
            console.log(`Tab ${i+1}`)
            console.log('isEnabled:', isEnabled);
            console.log('isSelected:', isSelected);
            console.log('isDisplayed:', isDisplayed);

            if(isEnabled && isSelected){
                console.log("Tab Details 1:", tab1Details.isDisplayed());
                console.log("Tab Details 2:", tab2Details.isDisplayed());
                console.log("Tab Details 3:", tab3Details.isDisplayed());
            }
        }
    });

    it('Verify Timeouts', () => {
        //driver.setImplicitTimeout(10000);
        //driver.setTimeouts(10000);
        //driver.pause(10000);

        viewBtn.click();
        //dialog.tabsBtn.click();
    });

    it('Verify the repeat alarm options has attribute checked set to true when selected', ()=>{
        let isChecked, text;

        appBtn.click();
        alertDialogBtn.click();
        repeatAlarmBtn.click();

        text = _weekdayCheckbox(0).getText();
        expect(text).equal('Every Monday');

        isChecked = _weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('false');

        _weekdayCheckbox(0).click();

        isChecked = _weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('true');
    });

    // Execute a block of code after every test
    afterEach(() => {
        driver.reset();
    });
})