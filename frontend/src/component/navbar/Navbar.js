import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user, "user");
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Memories
        </Link>
      </div>
      <div className="nav-login">
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
          login
        </Link>
      </div>
      {/* <ul>
        {user ? (
          <div>
            <img src={user.result.imageUrl}>{user.result.name.charAt(0)}</img>
            <h4>{user.result.name}</h4>
            <button>logout</button>
          </div>
        ) : (
          <>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        )}
      </ul> */}
    </div>
  );
};

export default Navbar;
