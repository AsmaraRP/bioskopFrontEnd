import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ticketExm from "../../assets/ticketImg.png";
import barcode from "../../assets/barcode.png";

function Ticket() {
  return (
    <>
      <Navbar />
      <div className="ticket__main">
        <div className="container">
          <div className="ticket__content">
            <h1 className="ticket__title">Proof of Payment</h1>
            <img src={ticketExm} className="ticket__exam" />
            <img src={barcode} className="ticket__barcode" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Ticket;
