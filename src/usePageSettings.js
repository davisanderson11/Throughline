import { useState, useEffect } from 'react';

function getHeaderFromHash() {
  const hash = window.location.hash; // e.g., "#/ABC123EF"
  return hash ? hash.replace("#/", "") : "Home Page";
}

export default function usePageSettings() {
  // Set initial header based on the URL hash.
  const [headerText, setHeaderText] = useState(getHeaderFromHash());

  useEffect(() => {
    // When the hash changes, update the header state.
    function handleHashChange() {
      setHeaderText(getHeaderFromHash());
    }
    window.addEventListener("hashchange", handleHashChange);
    // Clean up the event listener when unmounting.
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Generates a random 8-character hexadecimal string.
  const generateRandomHex = () => {
    let result = "";
    const characters = "0123456789ABCDEF";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * 16));
    }
    return result;
  };

  // Instead of doing a full page redirect, we update the URL hash.
  const openNewPage = () => {
    const randomHex = generateRandomHex();
    // This will trigger the hashchange event and update headerText.
    window.location.hash = "/" + randomHex;
  };

  // Remove the hash to return to home.
  const returnHome = () => {
    window.location.hash = "";
  };

  return { headerText, openNewPage, returnHome };
}
