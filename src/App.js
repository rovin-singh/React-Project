import "./styles.css";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Filters from "./components/Filters";
import Restaurants from "./components/Restaurants";
import userInfo from "./data/userInfo";
function App() {
  return (
    <div className="App">
      <Navbar {...userInfo} />
      <Offers />
      <Filters />
      <Restaurants />
    </div>
  );
}
export default App;
