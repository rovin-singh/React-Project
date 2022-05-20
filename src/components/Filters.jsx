import React from "react";
const Filters = ({ filters }) => {
  return (
    <div className="App">
      <div class="container restaurants">
        <h1>50 restaurants</h1>
        <div class="restaurant-options">
          {Object.values(filters).map((value) => (
            <div class="restaurant-option">{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Filters;
