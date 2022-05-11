import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PaymentInfo from "../../components/PaymentInfo";
import PersonalPayment from "../../components/PersonalPayment";
import PaymentMethod from "../../components/paymentMethod";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function Payment() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const { state } = useLocation();
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const idUser = JSON.parse(localStorage.getItem("idUser"));
  const dataFinalbook = {
    userId: idUser,
    scheduleId: state.scheduleId,
    dateBooking: state.dateBooking,
    timeBooking: state.timeBooking,
    totalPayment: state.totalPayment,
    seat: state.seat,
    paymentMethod: "midtrans"
  };
  const handlePayment = async (event) => {
    try {
      const resultPay = await axios.post("booking", dataFinalbook);
      const midtrans = resultPay.data.data.redirectUrl;
      alert(`Go to payment : ${midtrans}`);
    } catch (error) {
      console.log(error.response);
    }
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
              {/* <h1 className="payment__paymentInfoTitle choosePay mt-4"> Choose a Payment Method</h1>
              <div className="payment__paymentMethod">
                <PaymentMethod />
              </div> */}
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
              <PersonalPayment data={dataUser} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Payment;
