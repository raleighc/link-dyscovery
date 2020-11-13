import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import Logo from "../../images/250x57.png";
// import { useHistory } from "react-router-dom";
import "./Navbar.css";

const NavbarUser = () => {
  // const history = useHistory();

  // // const handleSubmit = (e, _id) => {
  // //   e.preventDefault();
  // //   axios
  // //   .get("/api/:id", { _id})
  // //     .then((response) => {
  // //       history.push("/profile/" + response._id);
  // //     })
  // //     .catch((err) => {
  // //       alert("Invalid email or password");
  // //       console.log(err);
  // //     });
  // // };

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-custom">
      <Link to="/auth-home" className="nav-bar-link">
        <img src={Logo} alt="Link Dyscovery" />
      </Link>

      <button
        className="navbar-light navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/verified-resources-auth" className="nav-bar-link">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile/:id" className="nav-bar-link">
              Profile
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/auth-resource-category" className="nav-bar-link">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user-resources" className="nav-bar-link">
              Resources from Users
            </Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/login" className="nav-bar-link">
              Login
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUser;