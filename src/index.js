import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {combinedReducers, createStore} from 'redux'

function reducer(){
    return 'State'
}
const store = createStore(reducer)
console.log(store.getState())
ReactDOM.render(<App />, document.getElementById('root'));
