import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import genresReducer from './redux/genre/reducers';
import * as genresActions from './redux/genre/actions';

let store = createStore(genresReducer, applyMiddleware(thunk));


store.subscribe(res => console.log(res));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
