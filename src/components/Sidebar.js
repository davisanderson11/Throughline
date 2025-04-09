import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState('');

  // Generates a random 8-character hexadecimal string.
  const generateRandomHex = () => {
    let result = '';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * 16));
    }
    return result;
  };

  // Update active icon based on current route path.
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveIcon('home');
    } else if (path.includes('/search')) {
      setActiveIcon('search');
    } else if (path.includes('/profile')) {
      setActiveIcon('test');
    } else {
      setActiveIcon('');
    }
  }, [location]);

  const navigateToProfile = () => {
    const hex = generateRandomHex();
    navigate(`/profile/${hex}`);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div 
        id="home-button" 
        onClick={() => {
          goHome();
        }}
      >
        <div className={`icon-wrapper ${activeIcon === 'home' ? 'active' : ''}`}>
          <div className="icon-main">
            <span className="material-symbols-rounded">home</span>
          </div>
          <div className="icon-shadow">
            <span className="material-symbols-rounded">home</span>
          </div>
        </div>
      </div>
      <div 
        id="search-button" 
        onClick={() => navigate('/search')}
      >
        <div className={`icon-wrapper ${activeIcon === 'search' ? 'active' : ''}`}>
          <div className="icon-main">
            <span className="material-symbols-rounded">search</span>
          </div>
          <div className="icon-shadow">
            <span className="material-symbols-rounded">search</span>
          </div>
        </div>
      </div>
      <div 
        id="test-button" 
        onClick={() => {
          navigateToProfile();
        }}
      >
        <div className={`icon-wrapper ${activeIcon === 'test' ? 'active' : ''}`}>
          <div className="icon-main">
            <span className="material-symbols-rounded">star</span>
          </div>
          <div className="icon-shadow">
            <span className="material-symbols-rounded">star</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
