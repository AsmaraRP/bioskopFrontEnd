import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PaymentInfo from "../../components/PaymentInfo";
import PersonalPayment from "../../components/PersonalPayment";
import PaymentMethod from "../../components/paymentMethod";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const { state } = useLocation();
  const handlePayment = () => {
    console.log(state);
  };
  return (
    <>
      <Navbar />
      <div className="payment__main">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="payment__paymentInfoTitle"> Payment Info</h1>
              <PaymentInfo data={state} />
              <h1 className="payment__paymentInfoTitle mt-4"> Choose a Payment Method</h1>
              <PaymentMethod />
              <button
                className="btn payment__btnPrev"
                type="submit"
                onClick={() => handleNavigate("home")}
              >
                Previous step
              </button>
              <button className="btn payment__btnPay" type="submit" onClick={handlePayment}>
                Pay your order
              </button>
            </div>
            <div className="col-md-5">
              <h1 className="payment__personalTitle">Personal Info</h1>
              <PersonalPayment />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Payment;
