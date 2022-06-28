import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./index.css";
import logo from "../../assets/logoTick.png";
import logoSearch from "../../assets/search.png";
import photoProfile from "../../assets/siluetprofil.png";
import navOp from "../../assets/nav.png";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user);
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    navigate("/profile");
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
              <img src={logo} alt="" className="nav__logo" onClick={handleHome} />
            </li>
            <li className="nav-item">
              <button className="nav__btnMenu" onClick={() => handleNavigate("home")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav__btnMenu" onClick={() => handleNavigate("viewall")}>
                List Movie
              </button>
            </li>
            {user.data.role === "admin" && token ? (
              <li className="nav-item">
                <button className="nav__btnMenu" onClick={() => handleNavigate("managemovie")}>
                  Manage
                </button>
              </li>
            ) : null}
          </ul>
          <div className="nav__optionNav">
            <img src={navOp} alt="" className="nav__optionNavImg" />
          </div>
          {!token ? (
            <div className="nav___signUpNav">
              <button
                className="btn btn-outline-success nav__buttonSignUp"
                onClick={() => handleNavigate("signup")}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="nav__profileNav">
              <div className="row">
                <div className="col-md-auto">
                  <img src={logoSearch} alt="" className="nav__searchNav" />
                </div>
                {dropdown ? (
                  <div className="col-md-auto">
                    <button
                      className="nav__btnMenuDropdown"
                      onClick={() => handleNavigate("profile")}
                    >
                      Profile
                    </button>
                    <button className="nav__btnMenuDropdown" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="col-md-auto">
                    <input
                      type="text"
                      className="nav__searchWord"
                      placeholder="Search movie name"
                    />
                  </div>
                )}
                <div className="col-md-auto">
                  <div className="nav__profileMenu">
                    <button className="btn" onClick={handleDropdown}>
                      <img
                        src={
                          user.data.image
                            ? `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${user.data.image}`
                            : photoProfile
                        }
                        alt=""
                        className="nav__profileImg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
