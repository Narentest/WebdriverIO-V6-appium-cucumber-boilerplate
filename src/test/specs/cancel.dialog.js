import { appBtn, alertDialogBtn, cancelDialogMsgBtn, getDialogModalTitle, dialogOkBtn, cancelLongDialogMsgBtn, getDialogModalMsg, cancelUltraLongDialogMsgBtn } from '../../pages/dialog.page';
import { shortCancelDialog, longCancelDialog, ultraLongCancelDialog } from '../../data/data';
import { expect } from 'chai';
 
describe('Cancel Dialogs', () => {
    // Execute a block of code at the start of the test suite
    before(() => {
        appBtn.click();
        alertDialogBtn.click();
    });
    
    it('Verify that the cancel dialog short message is correct and displays', () => {
        cancelDialogMsgBtn.click();
        expect(getDialogModalTitle()).equal(shortCancelDialog.title);
        dialogOkBtn.click();
    });
    
    it('Verify that the cancel dialog long message is correct and displays', () => {
        cancelLongDialogMsgBtn.click();
        expect(getDialogModalTitle()).equal(longCancelDialog.title);
        expect(getDialogModalMsg()).equal(longCancelDialog.msg);
        dialogOkBtn.click();
    });
    
    it('Verify that the cancel dialog ultra long message is correct', () => {
        cancelUltraLongDialogMsgBtn.click();
        expect(getDialogModalTitle()).equal(ultraLongCancelDialog.title);
        expect(getDialogModalMsg()).equal(ultraLongCancelDialog.msg);
        dialogOkBtn.click();
    });

    // Execute a block of code at the end of the test suite
    after(() => {
    });
});