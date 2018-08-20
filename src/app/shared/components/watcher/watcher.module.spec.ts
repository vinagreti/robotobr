import { WatcherModule } from './watcher.module';

describe('WatcherModule', () => {
  let watcherModule: WatcherModule;

  beforeEach(() => {
    watcherModule = new WatcherModule();
  });

  it('should create an instance', () => {
    expect(watcherModule).toBeTruthy();
  });
});
