const {baseUrl} = require("../helpers/constants");
const {I} = inject();

module.exports = {
    locators: {
        buttonEntry: 'div.header-bar__liner-row div.header-bar-user_info',
        inputEmailOrPhone: 'login',
        inputPassword: 'password',
        buttonLogin: '.js-gtm-btn-submit-login',
        iconAuthUser: 'div.header-bar__liner-row span.icon-user'
    },
    visit() {
        I.amOnPage(baseUrl);
        return this;
    },
    login(username = process.env.USERNAME, password = process.env.PASSWORD) {
        I.click(this.locators.buttonEntry);
        I.fillField(this.locators.inputEmailOrPhone, username);
        I.fillField(this.locators.inputPassword, password);
        I.click(this.locators.buttonLogin);
        return this;
    },
    checkLogin() {
        I.waitForEnabled(this.locators.iconAuthUser, 7);
        return this;
    }
}
