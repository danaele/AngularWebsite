import { MySocialMediaProfilPage } from './app.po';

describe('my-social-media-profil App', () => {
  let page: MySocialMediaProfilPage;

  beforeEach(() => {
    page = new MySocialMediaProfilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
