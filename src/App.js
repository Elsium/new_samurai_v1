import React from "react";
import './App.css';
import logo from "./logo.png"

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src={logo} alt="logo"/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Massages</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <main className='main'>
                <div>
                    banner
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    my posts
                    <div>
                        new posts
                    </div>
                    <div>
                        post 1
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;