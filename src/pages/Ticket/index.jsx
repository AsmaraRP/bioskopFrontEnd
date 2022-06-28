import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import logo from "../../assets/ticketLogo.png";
import { useLocation } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

function Ticket() {
  const { state } = useLocation();
  return (
    <>
      <Navbar />
      <div className="ticket__main">
        <div className="container">
          <div className="ticket__content">
            <h1 className="ticket__title">Proof of Payment</h1>
            <div className="ticket__card">
              <div className="ticket__left">
                <div className="ticket__headLeft">
                  <img src={logo} alt="" className="ticket__logo" />
                </div>
              </div>
              <div className="ticket__right">
                <div className="ticket__headRight">
                  <img src={logo} alt="" className="ticket__logo" />
                </div>
              </div>
            </div>
            <div className="ticket__info">
              <div className="ticket__form">
                <div className="ticket__text1">Movie</div>
                <div className="ticket__text2">{state.name}</div>
                <div className="ticket__text1">Category</div>
                <div className="ticket__text2">{state.category}</div>
                <div className="ticket__text1">Time</div>
                <div className="ticket__text2">{state.date + " - " + state.time}</div>
                <div className="ticket__text1">Info Ticket</div>
                <div className="ticket__text2">
                  {state.seat + " - Total Payment Rp " + state.total}
                </div>
              </div>
              <div className="ticket__code">
                <div className="ticket__qr">
                  <QRCodeSVG value={state.id} size="200" />,
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
export default Ticket;
