import { BinanceServiceModule } from './binance-service.module';

describe('BinanceServiceModule', () => {
  let binanceServiceModule: BinanceServiceModule;

  beforeEach(() => {
    binanceServiceModule = new BinanceServiceModule();
  });

  it('should create an instance', () => {
    expect(binanceServiceModule).toBeTruthy();
  });
});
