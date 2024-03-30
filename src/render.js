import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './App';
import {addPost, updatePost, sendMsg, updateMsg} from './redux/state'

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