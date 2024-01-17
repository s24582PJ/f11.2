import React, { useState } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching random user data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User App</h1>
        <button onClick={fetchRandomUser}>Losuj dane</button>

        {userData && (
          <div>
            <img src={userData.picture.large} alt="User" />
            <p>
              Imię: {userData.name.first} {userData.name.last}
            </p>
            <p>Email: {userData.email}</p>
            <p>Telefon: {userData.phone}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
