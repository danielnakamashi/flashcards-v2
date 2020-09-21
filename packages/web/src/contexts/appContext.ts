import * as React from 'react';
import { Service } from '@flashcards/application';

export type IAppContext = {
  topicRepository: Service.ITopicRepositoryService;
  userService: Service.IUserService;
};

const appContext = React.createContext<IAppContext>({} as IAppContext);
const AppProvider = appContext.Provider;
const useServices = (): IAppContext => {
  const services = React.useContext(appContext);

  if (!services) {
    throw new Error('Services not set');
  }

  return services;
};

export { AppProvider, useServices, appContext };
