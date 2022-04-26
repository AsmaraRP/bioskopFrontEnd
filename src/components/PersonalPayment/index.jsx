import "./index.css";
import line from "../../assets/Line 21.png";
import warningIcon from "../../assets/warning.png";

function PersonalPayment() {
  return (
    <div className="personalPay__infoPersonal">
      <div className="mb-4">
        <label className="form-label personalPay__labelPersonal">Full Name</label>
        <input
          type="text"
          className="form-control personalPay__formPersonal"
          placeholder="Jonas El Redrigues"
        />
      </div>
      <div className="mb-4">
        <label className="form-label personalPay__labelPersonal">Email</label>
        <input
          type="email"
          className="form-control personalPay__formPersonal"
          placeholder="Jonasodri123@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label className="form-label personalPay__labelPersonal">Phone Number</label>
        <div className="personalPay__numberInput">
          <div className="row">
            <div className="col-3">
              <input type="text" className="personalPay__codeNumber" placeholder="+62"></input>
            </div>
            <div className="col-1">
              <img src={line} alt="" className="personalPay__linePhone" />
            </div>
            <div className="col-8">
              <input type="text" className="personalPay__formNumber" placeholder="81445687121" />
            </div>
          </div>
        </div>
      </div>
      <div className="personalPay__warningInput">
        <img src={warningIcon} alt="" className="personalPay__warningIcon" />
        <p className="personalPay__warningMsg">Fill your data correctly</p>
      </div>
    </div>
  );
}

export default PersonalPayment;
