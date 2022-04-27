import "./index.css";
import line from "../../assets/Line 12.png";

function PaymentInfo(probs) {
  const { dateBooking, name, seat, totalPayment } = probs.data;
  return (
    <div className="payInfo__paymentInfo">
      <div className="row">
        <div className="col-6">
          <p className="payInfo__titlePayementLeft">Date & time</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="payInfo__titlePaymentRight">{dateBooking}</p>
        </div>
      </div>
      <img src={line} alt="" className="payInfo__linePayment" />
      <div className="row">
        <div className="col-6">
          <p className="payInfo__titlePayementLeft">Movie title</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="payInfo__titlePaymentRight">{name}</p>
        </div>
      </div>
      <img src={line} alt="" className="payInfo__linePayment" />
      <div className="row">
        <div className="col-6">
          <p className="payInfo__titlePayementLeft">Cinema name</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="payInfo__titlePaymentRight">CineOne21 Cinema</p>
        </div>
      </div>
      <img src={line} alt="" className="payInfo__linePayment" />
      <div className="row">
        <div className="col-6">
          <p className="payInfo__titlePayementLeft">Number of tickets</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="payInfo__titlePaymentRight">{`${seat.length} pieces`}</p>
        </div>
      </div>
      <img src={line} alt="" className="payInfo__linePayment" />
      <div className="row">
        <div className="col-6">
          <p className="payInfo__titlePayementLeft totalPayOrder">Total payment</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p className="payInfo__titlePaymentRight payInfo__totalOrder">{`Rp. ${totalPayment}`}</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
