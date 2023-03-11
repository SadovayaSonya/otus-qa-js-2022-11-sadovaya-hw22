Feature('search');

Scenario('Поиск товара в каталоге', ({searchPage}) => {
    searchPage
        .visit()
        .searchProduct()
        .checkNumberOfProductsFound()
        .openCardProduct()
        .checkNameOfProduct();
});
