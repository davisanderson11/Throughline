import React, { useState } from 'react';
import './App.css';
import './extraStyles.css';

function App() {
  // Check the current URL's pathname.
  // If it’s "/" then use the default header text,
  // otherwise use the pathname (minus the leading slash) as the header.
  const path = window.location.pathname;
  const initialHeader = path === "/" ? "Home Page" : path.substring(1);
  const [headerText, setHeaderText] = useState(initialHeader);

  // This function generates a random 8-character hexadecimal string.
  const generateRandomHex = () => {
    let result = '';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * 16));
    }
    return result;
  };

  // When Button 2 is pressed, generate a new random hex,
  // construct a new URL, and open it in a new tab.
  const openNewPage = () => {
    const randomHex = generateRandomHex();
    const newUrl = window.location.origin + '/' + randomHex;
    window.location.href = newUrl;
  };

  const returnHome = () => {
    const homeUrl = window.location.origin + '/';
    window.location.href = homeUrl;
  }

  return (
    <div className="App">
      <h1>{headerText}</h1>
      <p>This is a blank webpage with some text and buttons.</p>
      <div>
        {/* Button 1 changes the header text to "Hello" */}
        <button onClick={returnHome}>Button 1</button>
        {/* Button 2 opens a new page with a random hex in the URL */}
        <button onClick={openNewPage}>Button 2</button>
      </div>
    </div>
  );
}

export default App;
