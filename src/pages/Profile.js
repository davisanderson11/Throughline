// src/pages/Profile.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Profile() {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Profile: {uuid}</h1>
      <p>This is the profile page for the user with ID {uuid}.</p>
      <button onClick={goHome}>Return Home</button>
    </div>
  );
}

export default Profile;
