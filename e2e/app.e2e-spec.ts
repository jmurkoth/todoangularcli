import { ToDoCliPage } from './app.po';

describe('to-do-cli App', () => {
  let page: ToDoCliPage;

  beforeEach(() => {
    page = new ToDoCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
