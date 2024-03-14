import React from "react";
import './App.css';

const App = () => {
  return (
      <div>
          <Header />
          <Techno />
      </div>
  );
}
const Techno = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}
const Header = () => {
    return (
        <div>
            <a href="http://google.com">Home </a>
            <a href="http://google.com">News </a>
            <a href="http://google.com">Messages</a>
        </div>
    );
}
export default App;
