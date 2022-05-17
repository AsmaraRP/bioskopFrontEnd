import React, { useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logowhite.png";
import logoT from "../../assets/logoblue.png";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    noTelp: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(form);
      const resultSignup = await axios.post("auth/register", form);
      setIsError(false);
      setMessage(resultSignup.data.msg);
      alert("Success Create Account, Please Check Your Email");
      navigate("/login");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      setForm({
        firstName: "",
        lastName: "",
        noTelp: "",
        email: "",
        password: ""
      });
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
  };
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="signup__left">
            <div className="signup__overlay">
              <img src={logo} alt="" className="signup__banner_img" onClick={handleHome} />
              <h2 className="signup__motto">wait, watch, wow!</h2>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="signup__right">
            <img src={logoT} alt="" className="signup__logo" />
            <h1 className="signup__h1">Sign Up</h1>
            <h4 className="signup__desc">Fill your additional details</h4>
            <div className="text-center">
              {!message ? null : isError ? (
                <div className="alert alert-danger signup__alert" role="alert">
                  {message}
                </div>
              ) : (
                <div className="alert alert-primary signup__alert" role="alert">
                  {message}
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="mb-3 signup__name">
                <label className="form-label">First Name</label>
                <input
                  className="signup__bar d-flex"
                  type="text"
                  value={form.firstName}
                  placeholder="Write your first name"
                  name="firstName"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3 signup__name">
                <label className="form-label">Last Name</label>
                <input
                  className="signup__bar d-flex"
                  type="text"
                  value={form.lastName}
                  placeholder="Write your last name"
                  name="lastName"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3 signup__name">
                <label className="form-label">Phone Number</label>
                <input
                  className="signup__bar d-flex"
                  type="text"
                  value={form.noTelp}
                  placeholder="Write your phone number"
                  name="noTelp"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3 signup__name">
                <label className="form-label">Email</label>
                <input
                  className="signup__bar d-flex"
                  type="email"
                  value={form.email}
                  placeholder="Write your email"
                  name="email"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="mb-3 signup__name">
                <label className="form-label">Password</label>
                <input
                  className="signup__bar d-flex"
                  type="password"
                  value={form.password}
                  placeholder="Write your password"
                  name="password"
                  onChange={handleChangeForm}
                />
              </div>
              <button className="btns signup__Btn" type="submit">
                Sign Up
              </button>
              <p className="signup__p">
                Already have account ?
                <Link to="/login" className="signup__switch">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
