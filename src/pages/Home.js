// src/pages/Home.js
import React from 'react';
import Sidebar from '../components/Sidebar';

function Home() {

  return (
    <div id="home-root">
      <div class="header">
      </div>
      <div class="content">
        <Sidebar />
        <div class="main">
        </div>
      </div>
    </div>
  );
}

export default Home;
