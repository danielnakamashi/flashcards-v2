import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function init(rootElement: Element | null) {
  ReactDOM.render(<App />, rootElement);
}

export { init };
