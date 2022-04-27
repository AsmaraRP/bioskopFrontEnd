import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logoblue.png";
import logoSearch from "../../assets/search.png";
import photoProfile from "../../assets/user.png";
import navOp from "../../assets/nav.png";

function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  return (
    <>
      <nav className="navbar nav__navcss fixed-top">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <img src={logo} alt="" className="nav__logo" />
            </li>
            <li className="nav-item">
              <button className="nav__btnMenu" onClick={() => handleNavigate("home")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav__btnMenu" onClick={() => handleNavigate("list-movie")}>
                List Movie
              </button>
            </li>
          </ul>
          <div className="nav___signUpNav">
            <button
              className="btn btn-outline-success nav__buttonSignUp"
              onClick={() => handleNavigate("signup")}
            >
              Sign Up
            </button>
          </div>
          <div className="nav__optionNav">
            <img src={navOp} alt="" className="nav__optionNavImg" />
          </div>
          <div className="nav__profileNav nav__displayHide">
            <div className="row">
              <div className="col-md-auto">
                <img src={logoSearch} alt="" className="nav__searchNav" />
              </div>
              <div className="col-md-auto">
                <input type="text" className="nav__searchWord" placeholder="Search movie name" />
              </div>
              <div className="col-md-auto">
                <div className="dropdown nav__profileMenu">
                  <button
                    className="btn"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                  >
                    <img src={photoProfile} alt="" className="nav__profileImg" />
                  </button>
                  <ul className="dropdown-menu nav__profileOption">
                    <li>Profile</li>
                    <li>Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="nav__navIconBar">
            <img src="CSS/img/nav.png" alt="" />
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
