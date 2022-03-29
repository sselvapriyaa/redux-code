import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {createStore,applyMiddleware,//} from 'redux';
import {createStore} from 'redux';
//import counterReducer from './reducer/CounterReducer';
//import ColorChoiceReducer from './reducer/ColorChoiceReducer';
import ColorChooseReducer from './reducer/ColorChooseReducer';
//import postReducer from './reducer/postReducer';
import {Provider} from 'react-redux';
//import {myLogger} from './middleware/myLogger';
import reportWebVitals from './reportWebVitals';

//const store = createStore(counterReducer);
const store = createStore(ColorChooseReducer);
//const store = createStore(ColorReducer);
//const store = createStore(ColorReducer, applyMiddleware(myLogger));
//const store = createStore(postReducer);
console.log('Store created');
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
