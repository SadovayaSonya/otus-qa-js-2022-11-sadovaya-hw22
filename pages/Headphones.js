const {headphonesUrl, optionSortByNewProduct} = require("../helpers/constants");
const {I} = inject();

module.exports = {
    locators: {
        dropdownSort: '.select-sort__link.select-sort__item',
        itemDropdownSort: locate('.select-sort__list.dropdown-menu div').withText(optionSortByNewProduct),
        inputMinPrice: locate('.catalog-params-price .form-control-sm').first(),
        inputMaxPrice: locate('.catalog-params-price .form-control-sm').last(),
        buttonCatalogView: locate('.catalog-params-view a').last()
    },
    visit() {
        I.amOnPage(headphonesUrl);
        return this;
    },
    sortByNewProducts() {
        I.click(this.locators.dropdownSort);
        I.click(this.locators.itemDropdownSort);
        return this;
    },
    setMinPrice(minPrice = 1000) {
        I.fillField(this.locators.inputMinPrice, minPrice);
        return this;
    },
    setMaxPrice(maxPrice = 2000) {
        I.clearField(this.locators.inputMaxPrice);
        I.fillField(this.locators.inputMaxPrice, maxPrice);
        return this;
    },
    setCatalogView() {
        I.click(this.locators.buttonCatalogView);
        return this;
    },
    checkSort() {
        I.see(optionSortByNewProduct);
        return this;
    },
    checkPrice(minPrice = '1000', maxPrice = '2000') {
        I.seeInField(this.locators.inputMinPrice, minPrice);
        I.seeInField(this.locators.inputMaxPrice, maxPrice);
        return this;
    },
    checkCatalogView() {
        I.seeAttributesOnElements(this.locators.buttonCatalogView, {class: 'active'});
        return this;
    }
}
