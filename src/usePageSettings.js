// usePageSettings.js
import { useState } from 'react';

export default function usePageSettings() {
  const path = window.location.pathname;
  const initialHeader = path === "/" ? "Home Page" : path.substring(1);
  const [headerText] = useState(initialHeader);

  // Generates a random 8-character hexadecimal string.
  const generateRandomHex = () => {
    let result = '';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * 16));
    }
    return result;
  };

  // Button actions.
  const openNewPage = () => {
    const randomHex = generateRandomHex();
    const newUrl = window.location.origin + '/' + randomHex;
    window.location.href = newUrl;
  };

  const returnHome = () => {
    window.location.href = window.location.origin + '/';
  };

  return { headerText, openNewPage, returnHome };
}
