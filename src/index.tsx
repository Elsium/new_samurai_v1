import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SamuraiApp from "./App";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <SamuraiApp/>
    </React.StrictMode>
);