import "./index.css";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataMovie, updateMovie, postMovie, deleteMovie } from "../../stores/actions/movie";
import CardMovie from "../../components/CardMovie";
import DetailMovieManage from "../../components/DetailMovieManage";

function ManageMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const limit = 6;
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
  const [formmovie, setFormmovie] = useState({
    name: "",
    category: "",
    synopsis: "",
    image: null,
    director: "",
    cast: "",
    releaseDate: "",
    duration: ",",
    post: true
  });
  const [idMovie, setIdMovie] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
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
  }, [isUpdate]);

  const getdataMovie = async () => {
    try {
      await dispatch(getDataMovie(page, limit, form.search, form.sort, releaseDate));
      setIsUpdate(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleDetailMovie = (id) => {
    navigate(`/detail/${id}`);
  };
  const setUpdate = (data) => {
    const { id, name, category, synopsis, image, director, cast, duration, releaseDate } = data;
    setFormmovie({
      ...formmovie,
      releaseDate,
      name,
      category,
      synopsis,
      image,
      director,
      cast,
      duration,
      post: false
    });
    setIdMovie(id);
  };
  const dataUpdate = async (data) => {
    try {
      await dispatch(updateMovie(idMovie, data));
      getdataMovie();
      setIsUpdate(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  const postData = async (data) => {
    try {
      await dispatch(postMovie(data));
      setIsUpdate(true);
      getdataMovie();
    } catch (error) {
      console.log(error.response);
    }
  };
  const deleteData = async (id) => {
    try {
      await dispatch(deleteMovie(id));
      getdataMovie();
      setIsUpdate(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <NavbarAdmin />
      <div className="manage__mainMovie">
        <div className="container">
          <div className="manage__formMovie">
            <h1 className="viewall__listTitle">Form Movie</h1>
          </div>
          <div className="manage__contentMovie">
            <DetailMovieManage data={formmovie} dataUpdate={dataUpdate} postData={postData} />
          </div>

          <div className="row">
            <div className="col-7 manage__titleRes">
              <h1 className="viewall__listTitle">Data Movie</h1>
            </div>
            <div className="col-5 manage__sortsearch">
              <div className="row viewall__search">
                <div className="col-6">
                  <select name="sort" className="viewall__sort" onChange={handleChangeForm}>
                    <option value="defult" disabled hidden>
                      Sort
                    </option>
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
          <div className="manage__dataMovie">
            <div className="row home__movieListNow">
              {movie.data.map((item) => (
                <div className="col-md-4 mb-3" key={item.id}>
                  <CardMovie data={item} setUpdate={setUpdate} deleteData={deleteData} />
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
export default ManageMovie;
