// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState('home');

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
    <div id="home-root">
      <div class="header">
      </div>
      <div class="content">
        <div class="sidebar">
          <div id="home-button" onClick={() => setActiveIcon('home')}>
            <div className={`icon-wrapper ${activeIcon === 'home' ? 'active' : ''}`}>
              <div class="icon-main">
                <span class="material-symbols-rounded">home</span>
              </div>
              <div class="icon-shadow">
                <span class="material-symbols-rounded">home</span>
              </div>
            </div>
          </div>
          <div id="search-button" onClick={() => setActiveIcon('search')}>
            <div className={`icon-wrapper ${activeIcon === 'search' ? 'active' : ''}`}>
              <div class="icon-main">
                <span class="material-symbols-rounded">search</span>
              </div>
              <div class="icon-shadow">
                <span class="material-symbols-rounded">search</span>
              </div>
            </div>
          </div>
          <div id="test-button" onClick={() => {setActiveIcon('test'); setTimeout(() => {navigateToProfile();}, 400);}}>
            <div className={`icon-wrapper ${activeIcon === 'test' ? 'active' : ''}`}>
              <div class="icon-main">
                <span class="material-symbols-rounded">star</span>
              </div>
              <div class="icon-shadow">
                <span class="material-symbols-rounded">star</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main">
          <div id="random-temp">
            <button onClick={navigateToProfile}>Go to a Random Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
