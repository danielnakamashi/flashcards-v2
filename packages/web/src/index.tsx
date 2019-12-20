import { init } from '@flashcards/react';
import * as serviceWorker from './serviceWorker';
import * as instances from './instances';

if (document.readyState !== 'loading') {
  init({ ...instances, rootElement: document.getElementById('root') });
} else {
  document.addEventListener(
    'DOMContentLoaded',
    () => init({ ...instances, rootElement: document.getElementById('root') }),
    {
      once: true,
    },
  );
}

serviceWorker.unregister();
