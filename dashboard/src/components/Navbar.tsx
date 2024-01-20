import logo from "../assets/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="logo..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Benefits
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Our Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Sign In
              </Link>
            </li>
            <li className="nav-item btn btn-warning">
              <Link className="nav-link" to={"/"}>
                Become a Member
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
