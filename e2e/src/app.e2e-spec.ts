import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display events list title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Upcoming Angular events');
  });
});
