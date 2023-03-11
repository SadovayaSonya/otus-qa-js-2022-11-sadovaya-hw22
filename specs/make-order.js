Feature('order');

Before(({productPage}) => {
    productPage
        .visit()
        .addToCart()
        .goToCart();
});

Scenario('Оформить заказ', ({shoppingCartPage}) => {
    shoppingCartPage
        .visit()
        .fillPersonalData()
        .checkFilledPersonalData()
        .fillAddress()
        .checkFilledAddress()
        .fillCommentToCourier()
        .checkFilledComment()
        .confirmOrder();
});
