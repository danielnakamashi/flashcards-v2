import { Service } from '@flashcards/application';

const userAuthenticatonMock: Service.IUserService = {
  getUser: () =>
    Promise.resolve({
      displayName: 'User Name',
      email: 'email@example.com',
      photoURL: 'https://via.placeholder.com/150',
      uid: '123',
    }),
  loginWithProvider: jest.fn(() => Promise.resolve(null)),
  logout: jest.fn(() => Promise.resolve()),
};

export { userAuthenticatonMock };
