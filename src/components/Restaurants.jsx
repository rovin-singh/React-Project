import React from "react";
import Restaurant from "./Restaurent";
const Restaurants = (props) => {
  return (
    <div class="container divider">
      <div class="cards">
        {props.restaurants.map((res) => (
          <Restaurant key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};
export default Restaurants;
