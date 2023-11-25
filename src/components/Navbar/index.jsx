import CartIcon from "../../assets/shopping-cart-icon.svg";

import "./index.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <h1 className="logo-heading">Reeco</h1>
          </div>
          <ul className="nav-items">
            <li className="nav-item">Store</li>
            <li className="nav-item">Orders</li>
            <li className="nav-item">Analytics</li>
          </ul>
        </div>
        <div className="right">
          <div className="cart-container">
            <span className="cart-item-count">0</span>
            <img src={CartIcon} alt="cartIcon" className="cart-icon" />
          </div>

          <p>Hello,James^</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
