import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logoblue.png";
import navOp from "../../assets/nav.png";

function NavbarAdmin() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <>
      <nav className="navbar nav__navcss fixed-top">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <img src={logo} alt="" className="nav__logo" onClik={handleHome} />
            </li>
            <li className="nav-item">
              <button className="nav__btnMenu" onClick={() => handleNavigate("dashboard")}>
                Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button className="nav__btnMenu" onClick={() => handleNavigate("managemovie")}>
                Manage Movie
              </button>
            </li>
            <li className="nav-item">
              <button className="nav__btnMenu" onClick={() => handleNavigate("manageschedule")}>
                Manage Schedule
              </button>
            </li>
          </ul>
          <div className="nav___signUpNavAdmin">
            <button
              className="btn btn-outline-success nav__buttonSignUp"
              onClick={() => handleNavigate("home")}
            >
              ADMIN
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
