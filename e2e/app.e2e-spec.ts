import { NgCribsPage } from './app.po';

describe('ng-cribs App', () => {
  let page: NgCribsPage;

  beforeEach(() => {
    page = new NgCribsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
