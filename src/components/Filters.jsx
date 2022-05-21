import React from "react";
const Filters = ({ filters, currentFilteredBy, updateFilter }) => {
  return (
    <div className="App">
      <div class="container restaurants">
        <h1>50 restaurants</h1>
        <div class="restaurant-options">
          {Object.entries(filters).map(([key, value]) => (
            <div
              key={key}
              className={`restaurant-option ${
                currentFilteredBy === key ? "underline" : "false"
              }`}
              onClick={() => updateFilter(key)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Filters;
