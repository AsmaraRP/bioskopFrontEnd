import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PaymentInfo from "../../components/PaymentInfo";
import PersonalPayment from "../../components/PersonalPayment";

function Payment() {
  return (
    <>
      <Navbar />
      <div className="payment__main">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="payment__paymentInfoTitle"> Payment Info</h1>
              <PaymentInfo />
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
