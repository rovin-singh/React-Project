import React from "react";
const Offers = (props) => {
  return (
    <div className="App">
      <section class="offers">
        <div class="container">
          {props.offer.map((offer) => (
            <img class="offer" src={offer} alt="img" />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Offers;
