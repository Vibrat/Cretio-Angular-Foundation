import { RightSectionModule } from './right-section.module';

describe('RightSectionModule', () => {
  let rightSectionModule: RightSectionModule;

  beforeEach(() => {
    rightSectionModule = new RightSectionModule();
  });

  it('should create an instance', () => {
    expect(rightSectionModule).toBeTruthy();
  });
});
