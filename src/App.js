import "./styles.css";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Filters from "./components/Filters";
import Restaurants from "./components/Restaurants";
import userInfo from "./data/userInfo";
import offers from "./data/offers";
import restaurants from "./data/restaurants.json";
function App() {
  return (
    <div className="App">
      <Navbar {...userInfo} />
      <Offers offer={offers} />
      <Filters />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
export default App;
