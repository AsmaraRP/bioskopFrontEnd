import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  return (
    <>
      {/* <Link to="/basic/counter">Counter App</Link> | <Link to="/basic/react">Basic React</Link> | |{" "}
      <button onClick={() => handleNavigate("")}>Home</button> |{" "}
      <button onClick={() => handleNavigate("list-movie")}>List Movie</button> |
      <button onClick={handleLogout}>Logout</button> |{" "}
      <button onClick={() => handleNavigate("login")}>Logout</button> */}
      <nav className="navbar nav__navcss fixed-top">
        <div className="container">
          <img src="../../assets/Vector.png" alt="" width="100" height="24" className="nav__logo" />
          <a href="" className="nav__homeMenu">
            Home
          </a>
          <a href="" className="nav__listMenu">
            List Movie
          </a>
          <div className="signUpNav">
            <button className="btn btn-outline-success nav__buttonSignUp" type="submit">
              Sign Up
            </button>
          </div>
          <div className="nav__profileNav nav__displayHide">
            <div className="row">
              <div className="col-md-auto">
                <img src="CSS/img/search.png" alt="" className="nav__searchNav" />
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
                    <img src="CSS/img/user.png" alt="" className="nav__profileImg" />
                  </button>
                  <ul className="dropdown-menu nav__profileOption">
                    <li>Profile</li>
                    <li>Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__navIconBar">
            <img src="CSS/img/nav.png" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
