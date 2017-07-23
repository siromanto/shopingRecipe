import { ShopingRecipeAppPage } from './app.po';

describe('shoping-recipe-app App', () => {
  let page: ShopingRecipeAppPage;

  beforeEach(() => {
    page = new ShopingRecipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
