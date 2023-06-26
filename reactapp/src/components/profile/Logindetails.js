import React, { useState, useEffect } from 'react';
import ProfilePage from './ProfilePage';
import axios from 'axios';

const Logindetails = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    // Simulating user authentication or session management
    // Retrieve the logged-in user's ID
    const fetchLoggedInUserId = async () => {
      try {
        const response = await axios.get('http://localhost:8080/profile/logged-in-user-id');
        const data = response.data;

        setLoggedInUserId(data.userId);
      } catch (error) {
        console.error('Error fetching logged-in user ID:', error);
      }
    };

    fetchLoggedInUserId();
  }, []);

  return (
    <div className="App">
      {loggedInUserId ? (
        <ProfilePage userId={loggedInUserId} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Logindetails;
