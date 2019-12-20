import * as React from 'react';
import { Instances } from '../instances';

const appContext = React.createContext<Instances | null>(null);
const AppProvider = appContext.Provider;
const useInstances = () => {
  const instance = React.useContext(appContext);

  if (!instance) {
    throw new Error('Instance not set');
  }

  return instance;
};

export { AppProvider, useInstances };
