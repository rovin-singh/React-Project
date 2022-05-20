import "./styles.css";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Filters from "./components/Filters";
import Restaurants from "./components/Restaurants";
import userInfo from "./data/userInfo";
import offers from "./data/offers";
import restaurants from "./data/restaurants.json";
function App() {
  const filters = {
    1: "Cost High to Lost",
    2: "Ratings",
    3: "Delivery Time",
    4: "Relevance"
  };
  return (
    <div className="App">
      <Navbar {...userInfo} />
      <Offers offer={offers} />
      <Filters filters={filters} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
export default App;
