import React from "react";
import logo from "../logo.png";

const Header = () => {
    return (
        <header className='header'>
            <a href="#">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
            </a>
        </header>
    );
}

export default Header;