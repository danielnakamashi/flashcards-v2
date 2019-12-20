import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { User } from '@flashcards/entities';
import { IUserPresenter } from '@flashcards/presenters';

const userStore = createStore<User | null>(null);
const setUser = createEvent<User | null>('set user');

userStore.on(setUser, (_, user) => user);

const userPresenter: IUserPresenter = {
  setUser,
  useUser: () => useStore(userStore),
};

export { userStore, userPresenter };
