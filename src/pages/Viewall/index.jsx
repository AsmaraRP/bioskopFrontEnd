import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataMovie } from "../../stores/actions/movie";
import Cardfix from "../../components/Cardfix";

function Viewall() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const limit = 6;
  const months = [
    { addr: "", title: "ALL" },
    { addr: "2022-01", title: "January" },
    { addr: "2022-02", title: "February" },
    { addr: "2022-03", title: "March" },
    { addr: "2022-04", title: "April" },
    { addr: "2022-05", title: "Mei" },
    { addr: "2022-06", title: "June" },
    { addr: "2022-07", title: "July" },
    { addr: "2022-08", title: "Augst" },
    { addr: "2022-09", title: "September" },
    { addr: "2022-10", title: "October" },
    { addr: "2022-11", title: "November" },
    { addr: "2022-12", title: "Desember" }
  ];
  const [page, setPage] = useState(1);
  const movie = useSelector((state) => state.movie);
  const [releaseDate, setReleaseDate] = useState("");
  let totalPagination = [];
  for (let i = 1; i <= movie.pageInfo.totalPage; i++) {
    totalPagination.push(i);
  }
  const [form, setForm] = useState({
    search: "",
    sort: ""
  });
  const handleChangeForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log(form);
    getdataMovie();
  };
  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getdataMovie();
  }, [page]);
  useEffect(() => {
    getdataMovie();
  }, [releaseDate]);

  const getdataMovie = async () => {
    try {
      await dispatch(getDataMovie(page, limit, form.search, form.sort, releaseDate));
      console.log(movie.pageInfo);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleDetailMovie = (id) => {
    navigate(`/detail/${id}`);
  };
  const handlePagination = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  };
  return (
    <>
      <Navbar />
      <div className="viewall__main">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h1 className="viewall__listTitle">List Movie</h1>
            </div>
            <div className="col-5">
              <div className="row viewall__search">
                <div className="col-6">
                  <select name="sort" className="viewall__sort" onChange={handleChangeForm}>
                    <option value="">Sort</option>
                    <option value="DESC">A-Z</option>
                    <option value="ASC">Z-A</option>
                  </select>
                </div>
                <div className="col-6">
                  <input
                    className="viewall__bar d-flex"
                    type="text"
                    placeholder="Search your movie ..."
                    name="search"
                    onChange={handleChangeForm}
                    value={form.search}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="viewall__listMonthMovie">
            {months.map((item) => (
              <button
                className={`btn ${
                  item.addr === releaseDate ? "viewall__monthBtnActive" : "viewall__monthBtn"
                }`}
                onClick={() => setReleaseDate(item.addr)}
                key={item.addr}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="viewall__contentMovie">
            <div className="row home__movieListNow">
              {movie.data.map((item) => (
                <div className="col-md-4 mb-3" key={item.id}>
                  <Cardfix data={item} handleDetail={handleDetailMovie} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="view__paginate">
        {totalPagination.map((item) => (
          <button
            className={`btn ${item === page ? "view__buttonActive" : "view__button"}`}
            key={item.addr}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <Footer />
    </>
  );
}
export default Viewall;
