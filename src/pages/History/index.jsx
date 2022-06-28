import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import line from "../../assets/Line 36.png";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import photoProfile from "../../assets/siluetprofil.png";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

function History() {
  useEffect(() => {
    getdataTicket();
  }, []);
  const [dataTicket, setDataTicket] = useState([]);
  const getdataTicket = async () => {
    try {
      console.log("GET DATA TICKET");
      const idUser = localStorage.getItem("id");
      const ticket = await axios.get(`booking/user/${idUser}`);
      setDataTicket(ticket.data.data.slice(0, 3));
      console.log(dataTicket);
    } catch (error) {
      console.log(error.response);
    }
  };
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
  const handleTicket = (send) => {
    navigate("/ticket", { state: send });
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
              {dataTicket.map((item) => (
                <div className="history__card" key={item.id}>
                  <div className="row">
                    <div className="col-6">
                      <h2 className="history__movieDate">
                        {item.dateBooking.split("T")[0] + " - " + item.timeBooking.substring(0, 5)}
                      </h2>
                      <h1 className="history__movieName">{item.name}</h1>
                    </div>
                    <div className="col-6">
                      <img
                        src={
                          item.premiere === "ebv.id"
                            ? sponsor1
                            : item.premiere === "cineone21"
                            ? sponsor2
                            : sponsor3
                        }
                        className="history__imgCard"
                      />
                    </div>
                  </div>
                  <img src={line} className="history__lineCard" />
                  <div className="row">
                    <div className="col-6">
                      <div
                        className={
                          item.statusUsed === "active"
                            ? "history__statusTicket"
                            : "history__statusTicketExp"
                        }
                      >
                        {item.statusUsed === "active" ? "Ticket in Active" : "Ticket is Expired"}
                      </div>
                    </div>
                    <div className="col-6">
                      <button
                        className="history__seeTicket"
                        onClick={() =>
                          handleTicket({
                            name: item.name,
                            category: item.category,
                            date: item.dateBooking.split("T")[0],
                            time: item.timeBooking.substring(0, 5),
                            seat: item.seat,
                            total: item.totalPayment,
                            id: item.bookingId
                          })
                        }
                        disabled={item.statusUsed === "active" ? false : true}
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default History;
