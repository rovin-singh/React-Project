import React from "react";
const Navbar = (props) => {
  console.log(props.location);
  return (
    <section class="navbar">
      <div class="container">
        <img class="logo" src="assets/logo.svg" alt="img" />
        <div class="location">
          <span class="city">{props.location.city}</span>
          <span class="state">
            {props.location.state}, {props.location.country}
          </span>
        </div>
        <div class="navbar-options">
          <div class="navbar-option">
            <span class="material-icons"> person_outline</span> Sign In
          </div>
          <div class="navbar-option">
            <span class="material-icons">shopping_bag</span> Cart
          </div>
          <div class="navbar-option">
            <span class="material-icons">support</span> Help
          </div>
          <div class="navbar-option">
            <span class="material-icons">search</span> Search
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
