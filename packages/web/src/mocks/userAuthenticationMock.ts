import { Service } from '@flashcards/application';
import { User } from '@flashcards/core';

const userAuthenticatonMock = (): Service.IUserService => {
  let userMock: User | null = {
    displayName: 'User Name',
    email: 'email@example.com',
    photoURL: 'https://via.placeholder.com/150',
    uid: '123',
  };

  return {
    getUser: () => Promise.resolve(userMock),
    loginWithProvider: jest.fn(() => Promise.resolve(null)),
    logout: jest.fn(() => {
      userMock = null;
      return Promise.resolve();
    }),
  };
};

const emptyUserAuthenticationMock: Service.IUserService = {
  getUser: () => Promise.resolve(null),
  loginWithProvider: jest.fn(() => Promise.resolve(null)),
  logout: jest.fn(() => Promise.resolve()),
};

export { userAuthenticatonMock, emptyUserAuthenticationMock };
