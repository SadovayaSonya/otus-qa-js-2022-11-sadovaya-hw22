const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
require('dotenv').config({
  path: '.env'
});
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './specs/**/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.pult.ru',
      show: true,
      browser: 'chromium',
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js',
    basePage: "./pages/Base.js",
    headphonesPage: "./pages/Headphones.js",
    searchPage: "./pages/Search.js",
    productPage: "./pages/Product.js",
    shoppingCartPage: "./pages/ShoppingCart.js"
  },
  name: 'otus-qa-js-2022-11-sadovaya-hw22'
}