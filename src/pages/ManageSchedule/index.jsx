import "./index.css";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataMovie } from "../../stores/actions/movie";
import {
  getDataSchedule,
  updateSchedule,
  postSchedule,
  deleteSchedule
} from "../../stores/actions/schedule";
import Card from "../../components/CardScheduleManage";
import DetailScheduleManage from "../../components/DetailScheduleManage";

function ManageSchedule() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  useEffect(() => {
    getdataMovie();
    getdataSchedule();
    setFormschedule({
      name: "",
      image: "",
      location: "",
      premiere: "",
      price: "",
      time: "",
      dateStart: "",
      dateEnd: "",
      post: true,
      ...movie
    });
  }, []);
  const limit = 6;
  const [page, setPage] = useState(1);
  const movie = useSelector((state) => state.movie);
  const schedule = useSelector((state) => state.schedule);
  let totalPagination = [];
  for (let i = 1; i <= schedule.pageInfo.totalPage; i++) {
    totalPagination.push(i);
  }
  const [form, setForm] = useState({
    search: "",
    sort: ""
  });
  const [formschedule, setFormschedule] = useState({
    name: "",
    image: "",
    location: "",
    premiere: "",
    price: "",
    time: "",
    dateStart: "",
    dateEnd: "",
    post: true,
    ...movie
  });
  const [idMovie, setIdMovie] = useState("");
  const [idSchedule, setIdSchedule] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const handleChangeForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    getdataMovie();
  };
  useEffect(() => {
    getdataMovie();
    getdataSchedule();
  }, [page]);
  useEffect(() => {
    getdataMovie();
    getdataSchedule();
  }, [isUpdate]);

  const getdataMovie = async () => {
    try {
      await dispatch(getDataMovie("", 20, "", "ASC", ""));
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataSchedule = async () => {
    try {
      await dispatch(getDataSchedule(page, limit, "", "ASC"));
      setIsUpdate(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  const setUpdate = (data) => {
    const { id, movieId, image, location, premiere, price, time, dateStart, dateEnd, name } = data;
    setFormschedule({
      ...formschedule,
      name,
      image,
      location,
      premiere,
      price,
      time,
      dateStart,
      dateEnd,
      post: false,
      ...movie
    });
    setIdMovie(movieId), setIdSchedule(id);
  };
  const dataUpdate = async (data) => {
    try {
      const formSend = {
        movieId: idMovie,
        premiere: data.premiere,
        price: data.price,
        location: data.location,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        time: data.timePart.join(",")
      };
      await dispatch(updateSchedule(idSchedule, formSend));
      getdataSchedule();
      setIsUpdate(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  const postData = async (data) => {
    try {
      const formSend = {
        movieId: data.movieId,
        premiere: data.premiere,
        price: data.price,
        location: data.location,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd,
        time: data.timePart.join(",")
      };
      await dispatch(postSchedule(formSend));
      setIsUpdate(true);
      getdataSchedule();
    } catch (error) {
      console.log(error.response);
    }
  };
  const deleteData = async (id) => {
    try {
      await dispatch(deleteSchedule(id));
      getdataSchedule();
      setIsUpdate(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <NavbarAdmin />
      <div className="manage__mainSchedule">
        <div className="container">
          <div className="manage__formShedule">
            <h1 className="viewall__listTitle">Form Schedule</h1>
          </div>
          <div className="manage__contentSchedule">
            <DetailScheduleManage data={formschedule} dataUpdate={dataUpdate} postData={postData} />
          </div>

          <div className="row">
            <div className="col-7">
              <h1 className="viewall__listTitle">Data Schedule</h1>
            </div>
            <div className="col-5">
              <div className="row viewall__search manage__scheduleSearchsort">
                <div className="col-4">
                  <select name="sort" className="manage__sortSearch" onChange={handleChangeForm}>
                    <option value="defaultsort" disabled hidden>
                      Sort
                    </option>
                    <option value="ASC">A-Z</option>
                    <option value="DESC">Z-A</option>
                  </select>
                </div>
                <div className="col-4">
                  <select
                    name="location"
                    className="manage__locationSearch"
                    onChange={handleChangeForm}
                  >
                    <option value="defaultsort" disabled hidden>
                      Location
                    </option>
                    <option value="Banyuwangi">Banyuwangi</option>
                    <option value="Jember">Jember</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Sidoarjo">Sidoarjo</option>
                    <option value="Malang">Malang</option>
                  </select>
                </div>
                <div className="col-4">
                  <select name="movie" className="manage__movieSearch" onChange={handleChangeForm}>
                    <option value="defaultsort" disabled hidden>
                      Movie
                    </option>
                    {movie.data.map((movie) => (
                      <option value={movie.name} key={movie.id}>
                        {movie.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="manage__dataSchedule">
            <div className="row home__movieListNow">
              {schedule.data.map((item) => (
                <div className="col-md-4 mb-3" key={item.id}>
                  <Card data={item} setUpdate={setUpdate} deleteData={deleteData} />
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
export default ManageSchedule;
