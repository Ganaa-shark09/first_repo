import React from "react";
import { useState,useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState('🌗 Dark Mode');

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);
const handleClick = () => { 
  setText(prev => prev === '🌗 Dark Mode' ? '🌟 Light Mode' :'🌗 Dark Mode');
};

  return (
    <>
    <center>
      <header className="Header-container">
        <div className="Header-content">
          <h2 className="title">
          Where in the world !
          </h2>
          <p className="theme-changer" onClick={() => {setDarkMode(!darkMode)}}>
            <i onClick={handleClick}> {text}</i>
          </p>
        </div>
      </header>
      </center>
    </>
  );
}

export default Header;
