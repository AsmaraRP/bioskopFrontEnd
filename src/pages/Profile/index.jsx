import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import photoProfile from "../../assets/siluetprofil.png";
import { updateUser, getUserById, updatePasswod } from "../../stores/actions/user";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const user = useSelector((state) => state.user);
  const idUser = localStorage.getItem("id");
  const [formUser, setFormUser] = useState({ ...user.data });
  const [formPassword, setFormPassword] = useState({ newPassword: "", confirmPassword: "" });
  const handleChangeFormUser = (event) => {
    const { name, value } = event.target;
    setFormUser({ ...formUser, [name]: value });
  };
  const handleChangeFormPassword = (event) => {
    const { name, value } = event.target;
    setFormPassword({ ...formPassword, [name]: value });
  };
  const handleSubmitDetail = async (e) => {
    try {
      e.preventDefault();
      setFormUser({ ...formUser });
      const sendData = { id: idUser, ...formUser };
      console.log(sendData);
      await dispatch(updateUser(idUser, formUser));
      await dispatch(getUserById(idUser));
      alert("SUCCESS UPDATING DATA");
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleSubmitPassword = async (e) => {
    try {
      e.preventDefault();
      setFormPassword({ ...formPassword });
      const sendDataPassword = { id: idUser, ...formPassword };
      console.log(sendDataPassword);
      await dispatch(updatePasswod(idUser, formPassword));
      setFormPassword({ newPassword: "", confirmPassword: "" });
      alert("SUCCESS UPDATING DATA");
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    navigate("/profile");
  };
  return (
    <>
      <Navbar />
      <div className="profile__main">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="profile__info">
                <h1 className="profile__infotitle">INFO</h1>
                <img
                  src={
                    user.data.image
                      ? `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${user.data.image}`
                      : photoProfile
                  }
                  alt=""
                  className="profile__profileImg"
                />
                <h2 className="profile__infoname">
                  {user.data.firstName + " " + user.data.lastName}
                </h2>
                <button
                  className="btn btn-outline-success profile__buttonLogout"
                  onClick={handleLogout}
                >
                  logout
                </button>
              </div>
            </div>
            <div className="col-9">
              <div className="profile__menu">
                <button className="profile__btnMenu" onClick={() => handleNavigate("profile")}>
                  Account Settings
                </button>
                <button className="profile__btnNextMenu" onClick={() => handleNavigate("history")}>
                  Order History
                </button>
              </div>
              <div className="profile__detail">
                <h1 className="profile__detailTitle">Details Information</h1>
                <form>
                  <button className="btn profile__btnChangeDetail" onClick={handleSubmitDetail}>
                    Update Changes
                  </button>
                  <div className="row">
                    <div className="col-6">
                      <div className="profile__nameForm">
                        <label className="form-label">First Name</label>
                        <i className="bi bi-person"></i>
                        <input
                          className="profile__detailForm d-flex"
                          type="text"
                          placeholder="Write your first name"
                          name="firstName"
                          onChange={handleChangeFormUser}
                          value={formUser.firstName}
                        />
                      </div>
                      <div className="profile__nameForm">
                        <label className="form-label">Email</label>
                        <input
                          className="profile__detailForm d-flex"
                          type="email"
                          placeholder="Write your email"
                          name="email"
                          onChange={handleChangeFormUser}
                          value={formUser.email}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="profile__nameForm">
                        <label className="form-label">Last Name</label>
                        <input
                          className="profile__detailForm d-flex"
                          type="text"
                          placeholder="Write your last name"
                          name="lastName"
                          onChange={handleChangeFormUser}
                          value={formUser.lastName}
                        />
                      </div>
                      <div className="profile__nameForm">
                        <label className="form-label">Phone Number</label>
                        <input
                          className="profile__detailForm d-flex"
                          type="text"
                          placeholder="Write your phone number"
                          name="noTelp"
                          onChange={handleChangeFormUser}
                          value={formUser.noTelp}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="profile__password">
                <h1 className="profile__detailTitle">Account and Privacy</h1>
                <form>
                  <button className="btn profile__btnChangePassword" onClick={handleSubmitPassword}>
                    Update Changes
                  </button>
                  <div className="row">
                    <div className="col-6">
                      <div className="profile__nameForm">
                        <label className="form-label">New Password</label>
                        <input
                          className="profile__detailForm d-flex"
                          type="password"
                          placeholder="Write your new password"
                          name="newPassword"
                          onChange={handleChangeFormPassword}
                          value={formPassword.newPassword}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="profile__nameForm">
                        <label className="form-label">Confirm Password</label>
                        <input
                          className="profile__detailForm d-flex"
                          type="password"
                          placeholder="Write cofirm password"
                          name="confirmPassword"
                          onChange={handleChangeFormPassword}
                          value={formPassword.confirmPassword}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
