import * as React from 'react';
import { Service } from '@flashcards/application';

export type IAppContext = {
  topicRepository?: Service.ITopicRepository;
  userService?: Service.IUserService;
};

const appContext = React.createContext<IAppContext>({});
const AppProvider = appContext.Provider;
const useServices = () => {
  const services = React.useContext(appContext);

  if (!services) {
    throw new Error('Services not set');
  }

  return services;
};

export { AppProvider, useServices, appContext };
