import React from "react";
const Restaurant = (props) => {
  console.log(props.restaurants.image);
  return (
    <div class="container divider">
      <div class="cards">
        {props.restaurants.map((res) => (
          <div class="card">
            <img width="254" height="160px" src={res.image} />
            <div class="restaurant-details">
              <div class="restaurant-title">{res.name}</div>
              <div class="restaurant-subtitle">{res.category.join(",")}</div>
            </div>
            <div class="restaurant-info">
              <div class="restaurant-ratings">
                <i class="material-icons star-icon">star</i> {res.ratings}
              </div>
              .
              <div class="restaurant-delivery-timings">
                {res.deliveryTimings}
              </div>{" "}
              .
              <div class="restaurant-cost-for-two">
                ₹ {res.costfortwo} FOR TWO
              </div>
            </div>
            <div class="offer-banner">
              <span class="material-icons"> local_offer </span>
              <span class="offer-text">{res.offer.join(" | ")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Restaurant;
