import { wait } from '@testing-library/react';
import { GetUser } from './GetUser';
import { userAuthentication, userMock } from './mocks';

describe('GetUser', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication = {
      ...userAuthentication,
      getUser: () => Promise.resolve(userMock),
    };
    const presenter = { setUser: jest.fn(), useUser: () => null, reset: () => {} };
    const getUserUseCase = new GetUser(authentication, presenter);

    getUserUseCase.getUser();

    await wait(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
