import { WsClientModule } from './ws-client.module';

describe('WsClientModule', () => {
  let wsClientModule: WsClientModule;

  beforeEach(() => {
    wsClientModule = new WsClientModule();
  });

  it('should create an instance', () => {
    expect(wsClientModule).toBeTruthy();
  });
});
