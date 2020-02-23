import * as React from 'react';
import { Service } from '@flashcards/application';
import { topicRepositoryEmpty, userAuthenticationEmpty } from '@flashcards/service';

export type IAppContext = {
  topicRepository: Service.ITopicRepository;
  userService: Service.IUserService;
};

const emptyContext: IAppContext = {
  topicRepository: topicRepositoryEmpty,
  userService: userAuthenticationEmpty,
};
const appContext = React.createContext<IAppContext>(emptyContext);
const AppProvider = appContext.Provider;
const useServices = () => {
  const services = React.useContext(appContext);

  if (!services) {
    throw new Error('Services not set');
  }

  return services;
};

export { AppProvider, useServices, appContext };
