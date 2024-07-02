// data layer control (Redux)
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/App';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {thunk} from 'redux-thunk'

const store = createStore(() => reducers, applyMiddleware(thunk));


const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}><App /></Provider>);


