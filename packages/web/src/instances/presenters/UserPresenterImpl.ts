import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { User } from '@flashcards/entities';
import { IUserPresenter } from '@flashcards/presenters';

const userStore = createStore<User | null>(null);
const setUser = createEvent<User | null>('set user');
const reset = createEvent<void>('reset user');

userStore.on(setUser, (_, user) => user).reset(reset);

const userPresenter: IUserPresenter = {
  setUser,
  useUser: () => useStore(userStore),
  reset: () => {
    reset();
  },
};

export { userStore, userPresenter };
