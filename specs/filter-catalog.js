Feature('filter');

Scenario('Фильтрация каталога', ({headphonesPage}) => {
    headphonesPage
        .visit()
        .sortByNewProducts()
        .setMinPrice()
        .setMaxPrice()
        .setCatalogView()
        .checkSort()
        .checkPrice()
        .checkCatalogView();
});