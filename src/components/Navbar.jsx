import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light"
    style={{
      display: "flex",
      backgroundColor: "rgb(10,10,10,0.05)",
      padding: "5px",
      paddingBottom: "10px",
      textAlign: "center",
    }}
  >
    <div className="collapse navbar-collapse">
      <ul
        className="navbar-nav mr-auto"
        style={{
          listStyle: "none",
          display: "flex",
          fontSize: "20px",
          alignItems: "center",
        }}
      >
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "50px",
              fontSize: "25px",
            }}
          >
            SupportGen
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/"
            style={{
              textDecoration: "none",
              color: "gray",
              marginRight: "20px",
            }}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/tickets"
            style={{
              textDecoration: "none",
              color: "gray",
              marginRight: "20px",
            }}
          >
            Tickets
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/create-ticket"
            style={{ textDecoration: "none", color: "gray" }}
          >
            New Ticket
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
