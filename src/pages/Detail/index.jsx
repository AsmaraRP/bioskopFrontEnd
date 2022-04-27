import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailMovie from "../../components/DetailMovie";
import { useEffect, useState } from "react";
import axios from "../..//utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import sponsor from "../../assets/sponsor1.png";
import lineBook from "../../assets/Line 29.png";

function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);

  useEffect(() => {
    getdataMovieById();
  }, []);
  useEffect(() => {
    getdataSchedule();
  }, []);
  useEffect(() => {
    getdataSchedule();
  }, [limit]);

  const getdataMovieById = async () => {
    try {
      console.log("GET DATA MOVIE");
      const resultMovie = await axios.get(`movie/${params.id}`);
      setData(resultMovie.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataSchedule = async () => {
    try {
      console.log("GET DATA Schedule");
      const resultSchedule = await axios.get(`schedule?page=${page}&limit=${limit}`);
      setDataSchedule(resultSchedule.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const [dataOrder, setDataOrder] = useState({
    movieId: params.id,
    dateBooking: new Date().toISOString().split("T")[0]
  });
  // console.log(dataOrder);
  const changeDataBooking = (data) => {
    setDataOrder({ ...dataOrder, ...data });
  };
  const handleBooking = () => {
    navigate("/order", { state: dataOrder });
  };
  const handleView = () => {
    setLimit(limit + 3);
  };
  return (
    <>
      <Navbar />
      <DetailMovie data={data} />
      <div className="detail__showtimes">
        <div className="container">
          <h1 className="detail__showtimesTitle">Showtimes and Tickets</h1>
          <input type="date" value={dataOrder.dateBooking} className="detail__calender" />
          <select name="location" className="detail__location">
            <option value="">Select Location</option>
            <option value="jakarta">Jakarta</option>
          </select>
          <br />
          <div className="row mt-4">
            {dataSchedule.map((item) => (
              <div className="col-md-auto mb-3" key={item.id}>
                <div className="card detail__booknow">
                  <div className="row">
                    <div className="col-5">
                      <img src={sponsor} alt="" className="detail__booknowImg" />
                    </div>
                    <div className="col-7">
                      <p className="detail__cardTitle">ebv.id</p>
                      <p className="detail__cardDes">Whatever street No.12, South Purwokerto</p>
                    </div>
                  </div>
                  <img src={lineBook} alt="" className="detail__cardLine" />
                  <div className="row">
                    {item.time.split(",").map((time) => (
                      <div className="col-md-3" key={time}>
                        <button
                          className={`btn ${
                            time === dataOrder.timeBooking
                              ? "detail__cardTimeActive"
                              : "detail__cardTime"
                          }`}
                          onClick={() =>
                            changeDataBooking({
                              name: data.name,
                              price: item.price,
                              timeBooking: time,
                              scheduleId: item.id
                            })
                          }
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </div>
                  <br />
                  <img src={lineBook} alt="" className="detail__cardLine" />
                  <div className="row">
                    <div className="col-6">
                      <p className="detail__price">Price</p>
                    </div>
                    <div className="col-6">
                      <p className="detail__priceContent">{"Rp. " + item.price + "/seat"}</p>
                    </div>
                  </div>
                  <button
                    className="detail__bookButton"
                    disabled={item.id === dataOrder.scheduleId ? false : true}
                    onClick={handleBooking}
                  >
                    Booking Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="detail__viewMore" onClick={handleView}>
            view more
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Detail;
