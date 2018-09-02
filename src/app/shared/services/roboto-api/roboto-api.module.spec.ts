import { RobotoApiModule } from './roboto-api.module';

describe('RobotoApiModule', () => {
  let robotoApiModule: RobotoApiModule;

  beforeEach(() => {
    robotoApiModule = new RobotoApiModule();
  });

  it('should create an instance', () => {
    expect(robotoApiModule).toBeTruthy();
  });
});
