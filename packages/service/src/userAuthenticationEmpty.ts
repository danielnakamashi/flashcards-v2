import { Service } from '@flashcards/application';

const userAuthenticationEmpty: Service.IUserService = {
  getUser: () => Promise.resolve(null),
  loginWithProvider: () => Promise.resolve(null),
  logout: () => Promise.resolve(),
};

export { userAuthenticationEmpty };
