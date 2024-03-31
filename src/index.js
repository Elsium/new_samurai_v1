import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import store from './redux/store'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree);