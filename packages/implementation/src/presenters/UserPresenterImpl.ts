import { createStore, createEvent } from 'effector';
import { User } from '@flashcards/entities';
import { IUserPresenter } from '@flashcards/presenters';

const userStore = createStore<User | null>(null);
const setUser = createEvent<User | null>('set user');

userStore.on(setUser, (_, user) => user);

const userPresenter: IUserPresenter = {
  setUser,
};

export { userStore, userPresenter };
