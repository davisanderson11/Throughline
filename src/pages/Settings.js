// src/pages/Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Profile() {


  return (
    <div id="profile-root">
      <Header />
      <div class="content">
        <Sidebar />
        <div class="main">
          <h1>Settings:</h1>
          <p>This is the page for settings.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
