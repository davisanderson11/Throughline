// src/pages/Home.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Home() {

  return (
    <div id="home-root">
      <Header />
      <div class="content">
        <Sidebar />
        <div class="main">
          <button>New Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
