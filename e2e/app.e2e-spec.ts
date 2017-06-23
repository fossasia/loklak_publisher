import { LoklakPublisherPage } from './app.po';

describe('loklak-publisher App', () => {
  let page: LoklakPublisherPage;

  beforeEach(() => {
    page = new LoklakPublisherPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
