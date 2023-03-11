const assert = require("assert");
const {baseUrl, nameProduct} = require("../helpers/constants");
const {I} = inject();

module.exports = {
    locators: {
        inputSearch: '#search-input',
        buttonSearch: '#search-btn',
        rowProduct: 'div .product .product__img',
        titleProduct: '.b-card__title'
    },
    visit() {
        I.amOnPage(baseUrl);
        return this;
    },
    searchProduct(name = nameProduct) {
        I.fillField(this.locators.inputSearch, name);
        I.click(this.locators.buttonSearch);
        return this;
    },
    checkNumberOfProductsFound() {
        const numOfProducts = I.grabNumberOfVisibleElements(this.locators.rowProduct);
        assert.notEqual(numOfProducts, 0);
        return this;
    },
    openCardProduct() {
        I.click(this.locators.rowProduct);
        return this;
    },
    checkNameOfProduct(name = nameProduct) {
        I.see(name, this.locators.titleProduct);
        return this;
    }
}
