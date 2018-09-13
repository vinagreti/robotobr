import { MarketSelectorModule } from './market-selector.module';

describe('MarketSelectorModule', () => {
  let marketSelectorModule: MarketSelectorModule;

  beforeEach(() => {
    marketSelectorModule = new MarketSelectorModule();
  });

  it('should create an instance', () => {
    expect(marketSelectorModule).toBeTruthy();
  });
});
