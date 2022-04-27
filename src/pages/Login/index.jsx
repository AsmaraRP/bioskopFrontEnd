import React, { useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logowhite.png";
import logoT from "../../assets/logoblue.png";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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
      const resultLogin = await axios.post("auth/login", form);
      setIsError(false);
      setMessage(resultLogin.data.msg);
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      const resultUser = await axios.get(`user/${resultLogin.data.data.id}`);
      localStorage.setItem("dataUser", JSON.stringify(resultUser.data.data[0]));
      localStorage.setItem("idUser", JSON.stringify(resultLogin.data.data.id));
      navigate("/home");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      setForm({
        email: "",
        password: ""
      });
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="login__left">
            <div className="login__overlay">
              <img src={logo} alt="" className="login__banner_img" />
              <h2 className="login__motto">wait, watch, wow!</h2>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="login__right">
            <img src={logoT} alt="" className="login__logo" />
            <h1 className="login__h1">Sign In</h1>
            <h4 className="login__desc">
              Sign in with your data that you entered during your registration
            </h4>
            <div className="text-center">
              {!message ? null : isError ? (
                <div className="alert alert-danger login__alert" role="alert">
                  {message}
                </div>
              ) : (
                <div className="alert alert-primary login__alert" role="alert">
                  {message}
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="mb-3 login__name">
                <label className="form-label">Email</label>
                <input
                  className="login__bar d-flex"
                  type="email"
                  value={form.email}
                  placeholder="Write your email"
                  name="email"
                  onChange={handleChangeForm}
                />
              </div>
              <br />
              <div className="mb-3 login__name">
                <label className="form-label">Password</label>
                <input
                  className="login__bar d-flex"
                  type="password"
                  value={form.password}
                  placeholder="Write your password"
                  name="password"
                  onChange={handleChangeForm}
                />
              </div>
              <button className="btns login__Btn" type="submit">
                Sign In
              </button>
              <p className="login__p">
                Forgot your password?
                <Link to="/login" className="login__switch">
                  Reset now
                </Link>
              </p>
              <p className="login__p">
                Do not have an account?
                <Link to="/login" className="login__switch">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
