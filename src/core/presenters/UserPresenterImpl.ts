import { createStore, createEvent } from 'effector';
import { User } from '../entities/User';
import { UserPresenter } from './UserPresenter';

const userStore = createStore<User | null>(null);
const setUser = createEvent<User | null>('set user');

userStore.on(setUser, (_, user) => user);

const userPresenter: UserPresenter = {
  setUser,
};

export { userStore, userPresenter };
