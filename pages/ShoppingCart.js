const {
    cartUrl,
    exampleComment,
    exampleEmail,
    exampleFlat,
    exampleHouse,
    exampleName,
    examplePhone,
    exampleStreet,
    examplePhoneWithMask
} = require("../helpers/constants");
const {I} = inject();

module.exports = {
    locators: {
        inputName: '#name--6',
        inputEmail: '#email--7',
        inputPhone: '#phone--8',
        inputStreet: '#street--2',
        inputHouse: '#house--3',
        inputFlat: '#flat--4',
        buttonAddComment: '.checkout-form-address__link',
        inputComment: '#comment--5',
        buttonBuy: '.btn-primary'
    },
    visit() {
        I.amOnPage(cartUrl);
        return this;
    },
    fillPersonalData(name = exampleName, email = exampleEmail, phone = examplePhone) {
        I.fillField(this.locators.inputName, name);
        I.fillField(this.locators.inputEmail, email);
        I.click(this.locators.inputPhone);
        I.fillField(this.locators.inputPhone, phone);
        return this;
    },
    fillAddress(street = exampleStreet, house = exampleHouse, flat = exampleFlat) {
        I.fillField(this.locators.inputStreet, street);
        I.fillField(this.locators.inputHouse, house);
        I.fillField(this.locators.inputFlat, flat);
        return this;
    },
    fillCommentToCourier(comment = exampleComment) {
        I.click(this.locators.buttonAddComment);
        I.fillField(this.locators.inputComment, comment);
        return this;
    },
    checkFilledPersonalData(name = exampleName, email = exampleEmail, phone = examplePhoneWithMask) {
        I.seeInField(this.locators.inputName, name);
        I.seeInField(this.locators.inputEmail, email);
        I.seeInField(this.locators.inputPhone, phone);
        return this;
    },
    checkFilledAddress(street = exampleStreet, house = exampleHouse, flat = exampleFlat) {
        I.seeInField(this.locators.inputStreet, street);
        I.seeInField(this.locators.inputHouse, house);
        I.seeInField(this.locators.inputFlat, flat);
        return this;
    },
    checkFilledComment(comment = exampleComment) {
        I.seeInField(this.locators.inputComment, comment);
        return this;
    },
    confirmOrder() {
        I.click(this.locators.buttonBuy);
        return this;
    }
}
