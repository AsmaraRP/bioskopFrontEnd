import "./index.css";
import line from "../../assets/Line 29.png";
import pay1 from "../../assets/gpay.png";
import pay2 from "../../assets/visa.png";
import pay3 from "../../assets/gopay.png";
import pay4 from "../../assets/paypal.png";
import pay5 from "../../assets/dana.png";
import pay6 from "../../assets/bca.png";
import pay7 from "../../assets/bri.png";
import pay8 from "../../assets/ovo.png";

function PaymentMethod() {
  return (
    <div className="payMethod__paymentOption">
      <div className="row mb-4">
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay1} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay2} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay3} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay4} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay5} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay6} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay7} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="payMethod__paymentIcon">
            <img src={pay8} alt="" className="payMethod__iconWallet" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <img src={line} alt="" className="payMethod__lineOr" />
        </div>
        <div className="col-2">
          <p className="payMethod__textOr">or</p>
        </div>
        <div className="col-5">
          <img src={line} alt="" className="payMethod__lineOr" />
        </div>
      </div>
      <p className="payMethod__textCash">
        Pay via cash. <button className="payMethod__btnMorePay">See how it work</button>
      </p>
    </div>
  );
}

export default PaymentMethod;
