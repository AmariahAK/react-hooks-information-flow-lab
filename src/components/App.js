import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter"; // Import the Filter component
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      {/* Render the Header component */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={toggleDarkMode} />

      {/* Render the Filter component for category selection */}
      <Filter onCategoryChange={handleCategoryChange} />

      {/* Render the ShoppingList component with item data and selected category */}
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
