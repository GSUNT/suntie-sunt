import { SuntieSuntPage } from './app.po';

describe('suntie-sunt App', function() {
  let page: SuntieSuntPage;

  beforeEach(() => {
    page = new SuntieSuntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
