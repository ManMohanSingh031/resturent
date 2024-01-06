import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

// Title component for display logo
const Title = () => (
  <img className="logo" src={logo} alt="Food Fire Logo" />
);

// Header component for header section: Logo, Nav Items
const Navbar = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            {/* use Link component for routing */}
            <Link to="/body">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
