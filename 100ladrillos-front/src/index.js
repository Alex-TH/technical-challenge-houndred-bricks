import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContainer from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const AppWithContainer = AppContainer(App);

ReactDOM.render(<AppWithContainer />, document.getElementById('root'));
registerServiceWorker();
