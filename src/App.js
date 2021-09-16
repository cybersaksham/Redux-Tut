import "./App.css";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container my-3">
        <Shop />
      </div>
    </div>
  );
}

export default App;
