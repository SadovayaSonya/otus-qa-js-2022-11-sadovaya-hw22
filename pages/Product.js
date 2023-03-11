const assert = require("assert");
const {productUrl, textProductAddedSuccessfully, nameHeadphones, priceOfHeadphones} = require("../helpers/constants");
const {I} = inject();

module.exports = {
    locators: {
        buttonAddToCart: '.b-card__bar div.b-card-action__controls-buttons > .btn',
        priceOfProduct: '.b-card__bar [itemprop="price"]',
        buttonPlus: '.dsnippet__control--p',
        buttonGoToCart: '.basket-success .btn-primary',
        cardOfProductInCart: '.p-basket-item',
        amountOfProducts: '.dsnippet__line'
    },
    visit() {
        I.amOnPage(productUrl);
        return this;
    },
    addToCart() {
        I.click(this.locators.buttonAddToCart);
        I.see(textProductAddedSuccessfully);
        return this;
    },
    increaseNumberOfProduct() {
        I.click(this.locators.buttonPlus);
        I.wait(3);
        return this;
    },
    goToCart() {
        I.click(this.locators.buttonGoToCart);
        return this;
    },
    checkTotalCost() {
        const stringTotalPrice = String(priceOfHeadphones * 2).replace(/(\d)(?=(\d\d\d)+(\D|$))/g, '$1 ');
        I.see(stringTotalPrice, this.locators.cardOfProductInCart);
        return this;
    },
    async checkAddedProduct() {
        I.seeElement(this.locators.cardOfProductInCart);
        I.see(nameHeadphones);
        const amountOfProducts = await I.grabValueFrom(this.locators.amountOfProducts);
        assert.equal(amountOfProducts, '2');
        return this;
    }
}
