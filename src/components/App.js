import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      {/* Render the Header component */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={toggleDarkMode} />

      {/* Render the ShoppingList component with item data */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
