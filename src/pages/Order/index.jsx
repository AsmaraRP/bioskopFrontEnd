import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import sponsor from "../../assets/sponsor2.png";
import line from "../../assets/Line 12.png";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Seat from "../../components/Seat";

function Order() {
  const { state } = useLocation();
  console.log(state);
  const listSeat = ["A", "B", "C", "D", "E", "F", "G"];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(["A1", "C2", "B11"]);
  const [totalPayment, setTotalPayment] = useState(0);
  const handleSelectSeat = (seat) => {
    if (selectedSeat.includes(seat)) {
      const deleteSeat = selectedSeat.filter((el) => {
        return el !== seat;
      });
      setSelectedSeat(deleteSeat);
      setTotalPayment(totalPayment - state.price);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
      setTotalPayment(totalPayment + state.price);
    }
  };

  console.log(totalPayment);
  const handleBooking = () => {
    console.log(state);
    console.log(selectedSeat);
  };
  return (
    <>
      <Navbar />
      <div className="order__main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="order__movieSelect">Movie Selected</h1>
              <div className="order__movieOption">
                <h1 className="order__movieName">Spider-Man : Homecoming</h1>
                <button className="btn order__btnMovie" type="submit">
                  Change movie
                </button>
              </div>
              <h1 className="order__chooseSeat">Choose Your Seat</h1>
              <div className="order__seatOption">
                <div className="row">
                  <div className="col-12">
                    <p className="order__screen">Screen</p>
                  </div>
                </div>
                {listSeat.map((item) => (
                  <div key={item}>
                    <Seat
                      rowSeat={item}
                      selectedSeat={handleSelectSeat}
                      reserved={reservedSeat}
                      selected={selectedSeat}
                    />
                  </div>
                ))}
                <div className="row order__infoSeatBook">
                  <div className="col-1">
                    <p className="order__available"></p>
                  </div>
                  <div className="col-3">
                    <p className="order__infoSeat">Available</p>
                  </div>
                  <div className="col-1">
                    <p className="order__selected"></p>
                  </div>
                  <div className="col-3">
                    <p className="order__infoSeat">Selected</p>
                  </div>
                  <div className="col-1">
                    <p className="order__sold"></p>
                  </div>
                  <div className="col-3">
                    <p className="order__infoSeat">Sold</p>
                  </div>
                </div>
              </div>
              <button className="btn order__btnChange" type="submit">
                Change your movie
              </button>
              <button className="btn order__btnCheckout" type="submit">
                Checkout now
              </button>
            </div>
            <div className="col-md-4">
              <h1 className="order__personalInfo">Order Info</h1>
              <div className="order__infoBook">
                <img src={sponsor} alt="" className="order__orderImg" />
                <p className="order__nameImg">CineOne 21 Cinema</p>
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="order__titleOrderLeft">Movie selected</p>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="order__titleOrderRight d-flex justify-content-end">
                      Spider-Man: Homecoming
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="order__titleOrderLeft">Tuesday, 07 July 2020</p>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="order__titleOrderRight d-flex justify-content-end">
                      {state.timeBooking}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="order__titleOrderLeft">One ticket price</p>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="order__titleOrderRight d-flex justify-content-end">{`Rp. ${state.price}`}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="order__titleOrderLeft">Seat choosed</p>
                  </div>
                  <div className="col-6 mb-3 d-flex justify-content-end">
                    <p className="order__titleOrderRight">{`${selectedSeat}`}</p>
                  </div>
                </div>
                <img src={line} alt="" className="order__lineOrder" />
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="order__totalPayment">Total Payment</p>
                  </div>
                  <div className="col-6 mb-3 d-flex justify-content-end">
                    <p className="order__totalPrice">{`Rp. ${totalPayment}`}</p>
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
export default Order;
