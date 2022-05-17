import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import line from "../../assets/Line 36.png";
import sponsor from "../../assets/sponsor2.png";
import photoProfile from "../../assets/siluetprofil.png";

function History() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    navigate("/history");
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
                <button className="profile__btnNextMenu" onClick={() => handleNavigate("profile")}>
                  Account Settings
                </button>
                <button className="profile__btnMenu" onClick={() => handleNavigate("history")}>
                  Order History
                </button>
              </div>
              <div className="history__card">
                <div className="row">
                  <div className="col-6">
                    <h2 className="history__movieDate">Tuesday, 07 July 2020 - 04:30pm</h2>
                    <h1 className="history__movieName">Captain Marvel</h1>
                  </div>
                  <div className="col-6">
                    <img src={sponsor} className="history__imgCard" />
                  </div>
                </div>
                <img src={line} className="history__lineCard" />
                <div className="row">
                  <div className="col-6">
                    <div className="history__statusTicket">Ticket in Active</div>
                  </div>
                  <div className="col-6">
                    <button className="history__seeTicket" onClick={() => handleNavigate("ticket")}>
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default History;
