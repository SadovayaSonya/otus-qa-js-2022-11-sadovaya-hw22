Feature('auth');

Scenario('Авторизация', ({basePage}) => {
    basePage
        .visit()
        .login()
        .checkLogin();
});
