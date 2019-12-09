import { createStore, createEvent } from 'effector';
import { User } from '../../core/entities/User';
import { UserPresenter } from '../../core/presenters/UserPresenter';

const userStore = createStore<User | null>(null);
const setUser = createEvent<User | null>('set user');

userStore.on(setUser, (_, user) => user);

const userPresenter: UserPresenter = {
  setUser,
};

export { userStore, userPresenter };
