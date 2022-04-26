import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Navbar() {
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  //   [1]
  // const handleNavigateHome = () => {
  //     navigate("/");
  // }
  // const handleNavigateListMovie = () => {
  //     navigate("/list-movie");
  // }
  //   [2]
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  return (
    <>
      <h1>{dataUser.name}</h1>
      <Link to="/basic/counter" className="navbar_link">
        Counter App
      </Link>{" "}
      | <Link to="/basic/react">Basic React</Link> | |{" "}
      <Link to="/basic/counter">
        <a href="#" className="navbar_link">
          Counter App
        </a>
      </Link>{" "}
      |<button onClick={() => handleNavigate("")}>Home</button> |{" "}
      <button onClick={() => handleNavigate("list-movie")}>List Movie</button> |
      <button onClick={handleLogout}>Logout</button> |{" "}
      <button onClick={() => handleNavigate("login")}>Logout</button>
    </>
  );
}

export default Navbar;
