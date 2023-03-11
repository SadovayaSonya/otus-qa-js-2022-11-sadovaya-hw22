Feature('add product');

Scenario('Добавление товара в корзину', ({productPage}) => {
    productPage
        .visit()
        .addToCart()
        .increaseNumberOfProduct()
        .goToCart()
        .checkTotalCost()
        .checkAddedProduct();
});
