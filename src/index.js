import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Demo from './Component/Demo';
import Avatar from './Component/Avatar.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Avatar />, document.getElementById('root'));


serviceWorker.unregister();
