import { ToptalFreelancersPage } from './app.po';

describe('toptal-freelancers App', () => {
  let page: ToptalFreelancersPage;

  beforeEach(() => {
    page = new ToptalFreelancersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
