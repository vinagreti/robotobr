import { MyOpenOrdersModule } from './my-open-orders.module';

describe('MyOpenOrdersModule', () => {
  let myOpenOrdersModule: MyOpenOrdersModule;

  beforeEach(() => {
    myOpenOrdersModule = new MyOpenOrdersModule();
  });

  it('should create an instance', () => {
    expect(myOpenOrdersModule).toBeTruthy();
  });
});
