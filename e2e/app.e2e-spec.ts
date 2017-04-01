import { PwaPushTestPage } from './app.po';

describe('pwa-push-test App', () => {
  let page: PwaPushTestPage;

  beforeEach(() => {
    page = new PwaPushTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
