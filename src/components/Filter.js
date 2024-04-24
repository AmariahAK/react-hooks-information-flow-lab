import React from "react";

function Filter({ onCategoryChange }) {
  // Function to handle category change
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory); // Invoke the callback with selected category
  };

  return (
    <div className="Filter">
      {/* Render a select dropdown for category filtering */}
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
