import React from "react";
const Offers = (props) => {
  console.log(props);
  return (
    <div className="App">
      <section class="offers">
        <div class="container">
          <img class="offer" src="assets/offer1.jpeg" alt="img" />
          <img class="offer" src="assets/offer2.jpeg" alt="img" />
          <img class="offer" src="assets/offer3.jpeg" alt="img" />
          <img class="offer" src="assets/offer4.jpeg" alt="img" />
        </div>
      </section>
    </div>
  );
};
export default Offers;
