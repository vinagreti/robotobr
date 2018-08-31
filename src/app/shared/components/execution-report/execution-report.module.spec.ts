import { ExecutionReportModule } from './execution-report.module';

describe('ExecutionReportModule', () => {
  let executionReportModule: ExecutionReportModule;

  beforeEach(() => {
    executionReportModule = new ExecutionReportModule();
  });

  it('should create an instance', () => {
    expect(executionReportModule).toBeTruthy();
  });
});
