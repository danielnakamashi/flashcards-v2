import { createStore } from 'effector';
import { wait } from '@testing-library/react';
import { User } from '@flashcards/entities';
import { GetUser } from './GetUser';
import { userAuthentication, userMock } from './mocks';

describe('GetUser', () => {
  it('should call presenter with correct arguments', async () => {
    const authentication = {
      ...userAuthentication,
      getUser: () => Promise.resolve(userMock),
    };
    const presenter = {
      userStore: createStore<User | null>(userMock),
      setUser: jest.fn(),
      getUser: () => null,
    };
    const getUserUseCase = new GetUser(authentication, presenter);

    getUserUseCase.getUser();

    await wait(() => expect(presenter.setUser).toBeCalledWith(userMock));
  });
});
