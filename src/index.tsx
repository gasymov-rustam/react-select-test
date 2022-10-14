import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import MultiSelect from './MultiSelect';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MultiSelect isMulti />
    <MultiSelect isMulti={false} />
  </React.StrictMode>,
  document.getElementById('root')
);
