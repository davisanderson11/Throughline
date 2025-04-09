// src/pages/Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Profile() {
  const { uuid } = useParams();


  return (
    <div id="profile-root">
      <div class="header">
      </div>
      <div class="content">
        <Sidebar />
        <div class="main">
          <h1>Profile: {uuid}</h1>
          <p>This is the profile page for the user with ID {uuid}.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
