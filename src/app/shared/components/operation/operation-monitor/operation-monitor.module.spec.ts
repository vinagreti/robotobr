import { OperationMonitorModule } from './operation-monitor.module';

describe('OperationMonitorModule', () => {
  let operationMonitorModule: OperationMonitorModule;

  beforeEach(() => {
    operationMonitorModule = new OperationMonitorModule();
  });

  it('should create an instance', () => {
    expect(operationMonitorModule).toBeTruthy();
  });
});
