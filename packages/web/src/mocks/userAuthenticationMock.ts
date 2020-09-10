import { Service } from '@flashcards/application';

const user = {
  displayName: 'User Name',
  email: 'email@example.com',
  photoURL: 'https://via.placeholder.com/150',
  uid: '123',
};

const userAuthenticatonMock: Service.IUserService = {
  getUser: () => Promise.resolve(user),
  loginWithProvider: jest.fn(() => Promise.resolve(null)),
  logout: jest.fn(() => Promise.resolve()),
};

const emptyUserAuthenticationMock: Service.IUserService = {
  getUser: () => Promise.resolve(null),
  loginWithProvider: jest.fn(() => Promise.resolve(null)),
  logout: jest.fn(() => Promise.resolve()),
};

export { userAuthenticatonMock, emptyUserAuthenticationMock };
