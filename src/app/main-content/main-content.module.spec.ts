import { MainContentModule } from './main-content.module';

describe('MainContentModule', () => {
  let mainContentModule: MainContentModule;

  beforeEach(() => {
    mainContentModule = new MainContentModule();
  });

  it('should create an instance', () => {
    expect(mainContentModule).toBeTruthy();
  });
});
