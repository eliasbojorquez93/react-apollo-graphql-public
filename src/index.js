import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloContainer from './apollo/ApolloProvider';

ReactDOM.render(<ApolloContainer children={<App />} />, document.getElementById('root'));

serviceWorker.unregister();
