// App.js
import React from 'react';
import './App.css';
import './extraStyles.css';
import Background from './background'; // Adjust the path as necessary
import usePageSettings from './usePageSettings'; // Import the custom hook

function App() {
  const { headerText, openNewPage, returnHome } = usePageSettings();

  return (
    <div className="App">
      {/* Render the background canvas */}
      <Background />
      <h1>{headerText}</h1>
      <p>This is a blank webpage with some text and buttons.</p>
      <div>
        <button onClick={returnHome}>Button 1</button>
        <button onClick={openNewPage}>Button 2</button>
      </div>
    </div>
  );
}

export default App;
