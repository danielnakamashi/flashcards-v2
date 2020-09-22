import { Service } from '@flashcards/application';
import { User } from '@flashcards/core';

const defaultUserMock = {
  displayName: 'User Name',
  email: 'email@example.com',
  photoURL: 'https://via.placeholder.com/150',
  uid: '1',
};

const userAuthenticatonMock = (user: User = { ...defaultUserMock }): Service.IUserService => {
  let userMock: User | null = user;

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
