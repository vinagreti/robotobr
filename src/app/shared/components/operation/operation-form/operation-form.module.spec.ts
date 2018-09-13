import { OperationFormModule } from './operation-form.module';

describe('OperationFormModule', () => {
  let operationFormModule: OperationFormModule;

  beforeEach(() => {
    operationFormModule = new OperationFormModule();
  });

  it('should create an instance', () => {
    expect(operationFormModule).toBeTruthy();
  });
});
