import Navbar from "./components/Navbar";
import OrderHeader from "./components/OrderHeader";
import Suppliers from "./components/Suppliers";
import ProductDetails from "./components/ProductDetails";

import "./App.css";

function App() {
  return (
    <div>
      <div className="app">
        <Navbar />
        <OrderHeader />
        <div className="main-container">
          <Suppliers />
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}
export default App;
