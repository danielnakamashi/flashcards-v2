import { init } from '@flashcards/react';
import * as serviceWorker from './serviceWorker';

if (document.readyState !== 'loading') {
  init(document.getElementById('root'));
} else {
  document.addEventListener('DOMContentLoaded', () => init(document.getElementById('root')), {
    once: true,
  });
}

serviceWorker.unregister();
