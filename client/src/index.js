// data layer control (Redux)
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {thunk} from 'redux-thunk'
const loggerMiddleware = store => next => action => {
    console.log('Dispatching action:', action);
    console.log('Current state:', store.getState());
     next(action);
  }

const store = createStore(() => reducers, applyMiddleware(loggerMiddleware));


const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}><App /></Provider>);


