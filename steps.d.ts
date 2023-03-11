/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./pages/Base.js');
type headphonesPage = typeof import('./pages/Headphones.js');
type searchPage = typeof import('./pages/Search.js');
type productPage = typeof import('./pages/Product.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, basePage: basePage, headphonesPage: headphonesPage, searchPage: searchPage, productPage: productPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
