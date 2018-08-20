import { UpsertOrderModule } from './upsert-order.module';

describe('UpsertOrderModule', () => {
  let upsertOrderModule: UpsertOrderModule;

  beforeEach(() => {
    upsertOrderModule = new UpsertOrderModule();
  });

  it('should create an instance', () => {
    expect(upsertOrderModule).toBeTruthy();
  });
});
