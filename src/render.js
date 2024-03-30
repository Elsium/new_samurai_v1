import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import {addPost, updatePost, sendMsg, updateMsg} from './redux/state'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePost={updatePost} sendMsg={sendMsg} updateMsg={updateMsg}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}