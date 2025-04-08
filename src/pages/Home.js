// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Generates a random 8-character hexadecimal string.
  const generateRandomHex = () => {
    let result = '';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * 16));
    }
    return result;
  };

  const navigateToProfile = () => {
    const hex = generateRandomHex();
    navigate(`/profile/${hex}`);
  };

  return (
    <div id = "home-root">
      <div id = "header">
      </div>
      <div id = "content">
        <div id = "sidebar">
          <div id = "home-button">
            <div id = "icon-wrapper">
              <div id = "icon-main">
                <span class="material-symbols-rounded">home</span>
              </div>
              <div id = "icon-shadow">
                <span class="material-symbols-rounded">home</span>
              </div>
            </div>
          </div>
          <div id = "search-button">
            <div id = "icon-wrapper">
              <div id = "icon-main">
                <span class="material-symbols-rounded">search</span>
              </div>
              <div id = "icon-shadow">
                <span class="material-symbols-rounded">search</span>
              </div>
            </div>
          </div>
        </div>
        <div id = "main">
          <div id = "random-temp">
            <button onClick={navigateToProfile}>Go to a Random Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
