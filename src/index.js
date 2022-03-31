import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import {createStore,applyMiddleware} from 'redux';
import {createStore} from 'redux';
//import counterReducer from './reducer/CounterReducer';
//import ColorChoiceReducer from './reducer/ColorChoiceReducer';
//import ColorChooseReducer from './reducer/ColorChooseReducer';
import ColorReducer from './reducer/ColorReducer';
//import postReducer from './reducer/postReducer';
import {Provider} from 'react-redux';
//import {myLogger} from './middleware/myLogger';
//import {myLogger2} from './middleware/myLogger2';
//import logger from 'redux-logger';
import reportWebVitals from './reportWebVitals';
//import postReducer from './reducer/postReducer';
//import Posts from './component/Posts';
//import thunk from 'redux-thunk';
//import {composeWithDevTools} from 'redux-devtools-extension';

//const devTools = composeWithDevTools(applyMiddleware(myLogger, myLogger2));
//const store = createStore(ColorReducer, devTools);
//const store = createStore(ColorChooseReducer, applyMiddleware(myLogger, myLogger2, logger));
//const store = createStore(ColorChooseReducer, applyMiddleware(thunk));
//const store = createStore(postReducer, applyMiddleware(thunk));
//const store = createStore(postReducer);
const store = createStore(ColorReducer);
//const store = createStore(postReducer);
console.log('Store created');
ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
    
//  
//<Posts/> 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
