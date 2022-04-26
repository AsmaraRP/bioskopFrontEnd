import NavBar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "../..//utils/axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Membership from "../../components/Membership";
import Card from "../../components/Card";
import Cardfix from "../../components/Cardfix";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const limit = 5;
  const months = [
    { number: 1, title: "January" },
    { number: 2, title: "February" },
    { number: 3, title: "March" },
    { number: 4, title: "April" },
    { number: 5, title: "Mei" },
    { number: 6, title: "June" },
    { number: 7, title: "July" },
    { number: 8, title: "Augst" },
    { number: 9, title: "September" },
    { number: 10, title: "October" },
    { number: 11, title: "November" },
    { number: 12, title: "Desember" }
  ];
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [releaseDate, setReleaseDate] = useState(4);
  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getdataMovie();
  }, [page]);

  const getdataMovie = async () => {
    try {
      console.log("GET DATA MOVIE");
      const resultMovie = await axios.get(`movie?page=${page}&limit=${limit}`);
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleDetailMovie = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <NavBar />
      <Banner />
      <div className="home__contentNowShowing">
        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <h4 className="home__titleNowShowing">Now Showing</h4>
            </div>
            <div className="col-mod-auto d-flex justify-content-end">
              <button className="home__viewAll" onClick={() => handleNavigate("viewall")}>
                view all
              </button>
            </div>
          </div>
          <div className="row home__movieListNow">
            {data.map((item) => (
              <div className="col-md-2 mx-3" key={item.id}>
                <Card data={item} handleDetail={handleDetailMovie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home__contentUpcoming">
        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <h4 className="home__titleUpcoming">Upcoming Movies</h4>
            </div>
            <div className="col-mod-auto d-flex justify-content-end">
              <button className="home__viewAll" onClick={() => handleNavigate("viewall")}>
                view all
              </button>
            </div>
          </div>
          <div className="home__listMonthMovie">
            {months.map((item) => (
              <button
                className={`btn ${
                  item.number === releaseDate ? "home__monthBtnActive" : "home__monthBtn"
                }`}
                onClick={() => setReleaseDate(item.number)}
                key={item.number}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="row home__movieListNow">
            {data.map((item) => (
              <div className="col-md-2 mx-3" key={item.id}>
                <Cardfix data={item} handleDetail={handleDetailMovie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Membership />
      <Footer />
    </>
  );
}
export default Home;
