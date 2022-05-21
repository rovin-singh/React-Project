import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Filters from "./components/Filters";
import Restaurants from "./components/Restaurants";
import userInfo from "./data/userInfo";
import offers from "./data/offers";
import restaurants from "./data/restaurants.json";
const filters = {
  1: "Cost High to Lost",
  2: "Cost Lost to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance"
};
function App() {
  const [filterBy, setFilterBy] = React.useState("");
  const [data, setData] = React.useState(restaurants);

  const updateFilter = (newFilter) => {
    switch (newFilter) {
      case "1": {
        setFilterBy("1");
        data.sort((a, b) => a.costfortwo - b.costfortwo);
        setData([...data]);
        break;
      }
      case "2": {
        setFilterBy("2");
        data.sort((a, b) => b.costfortwo - a.costfortwo);
        setData([...data]);
        break;
      }
      default: {
        setData(restaurants);
        break;
      }
    }
  };
  return (
    <div className="App">
      <Navbar {...userInfo} />
      <Offers offer={offers} />
      <Filters
        filters={filters}
        currentFilteredBy={filterBy}
        updateFilter={updateFilter}
      />
      <Restaurants restaurants={data} />
    </div>
  );
}
export default App;
