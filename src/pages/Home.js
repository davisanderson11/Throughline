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
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
      <button onClick={navigateToProfile}>Go to a Random Profile</button>
    </div>
  );
}

export default Home;
