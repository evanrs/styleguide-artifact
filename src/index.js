import React from 'react';
import ReactDOM from 'react-dom';
import ress from 'ress';

import 'typeface-lato';
import 'typeface-montserrat';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
