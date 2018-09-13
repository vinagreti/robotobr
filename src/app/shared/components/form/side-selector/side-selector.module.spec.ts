import { SideSelectorModule } from './side-selector.module';

describe('SideSelectorModule', () => {
  let sideSelectorModule: SideSelectorModule;

  beforeEach(() => {
    sideSelectorModule = new SideSelectorModule();
  });

  it('should create an instance', () => {
    expect(sideSelectorModule).toBeTruthy();
  });
});
