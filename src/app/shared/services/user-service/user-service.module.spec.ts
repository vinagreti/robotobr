import { UserServiceModule } from './user-service.module';

describe('UserServiceModule', () => {
  let userServiceModule: UserServiceModule;

  beforeEach(() => {
    userServiceModule = new UserServiceModule();
  });

  it('should create an instance', () => {
    expect(userServiceModule).toBeTruthy();
  });
});
