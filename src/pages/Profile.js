// src/pages/Profile.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Profile() {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState('test');

  const goHome = () => {
    navigate('/');
  };

  return (
    <div id="profile-root">
      <div class="header">
      </div>
      <div class="content">
        <div class="sidebar">
          <div id="home-button" onClick={() => {setActiveIcon('home'); setTimeout(() => {goHome();}, 400);}}>
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
          <div id="test-button" onClick={() => setActiveIcon('test')}>
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
          <h1>Profile: {uuid}</h1>
          <p>This is the profile page for the user with ID {uuid}.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
