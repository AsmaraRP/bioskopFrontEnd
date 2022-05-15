import "./index.css";
import poster from "../../assets/poster.png";
import { useState, useEffect } from "react";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";

function DetailScheduleManage(props) {
  const { name, image, location, premiere, price, time, dateStart, dateEnd, post } = props.data;
  const [formUpdate, setFormUpdate] = useState({
    name,
    image,
    location,
    premiere,
    price,
    time,
    dateStart,
    dateEnd,
    post,
    timePart: ""
  });
  const [showInputTime, setShowInputTime] = useState(false);
  useEffect(() => {
    setFormUpdate({
      name,
      image,
      location,
      premiere,
      price,
      time,
      dateStart,
      dateEnd,
      post,
      timePart: time.split(",")
    });
  }, [props.data]);
  const handleChangeFormUpdate = (event) => {
    const { name, value } = event.target;
    setFormUpdate({ ...formUpdate, [name]: value });
  };
  const showImageMovie = (event) => {
    const { value } = event.target;
    props.data.data.map((item) => {
      if (item.name === value) {
        setFormUpdate({ ...formUpdate, image: item.image, movieId: item.id });
      }
    });
  };
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    setFormUpdate({
      ...formUpdate
    });
    props.dataUpdate(formUpdate);
  };
  const changePremiere = (prem) => {
    setFormUpdate({ ...formUpdate, ...prem });
  };
  const handleResetUpdate = (e) => {
    e.preventDefault();
    setFormUpdate({
      name,
      image,
      location,
      premiere,
      price,
      time,
      dateStart,
      dateEnd,
      post,
      timePart: ""
    });
  };
  const handleClear = (e) => {
    setFormUpdate({
      name: "",
      image: "",
      location: "",
      premiere: "",
      price: "",
      time: "",
      dateStart: "",
      dateEnd: "",
      post: true,
      timePart: ""
    });
  };
  const handlePost = (e) => {
    setFormUpdate({
      ...formUpdate
    });
    props.postData(formUpdate);
  };
  const handleAddTime = (event) => {
    if (event.key === "Enter") {
      setShowInputTime(false);
      setFormUpdate({
        ...formUpdate,
        timePart: [...formUpdate.timePart, event.target.value]
      });
    }
  };

  return (
    <div className="detailmanage__moviemanage">
      <div className="container">
        <form onSubmit={handleSubmitUpdate}>
          <div className="row">
            <div className="col-3 detailmanage__cardRes">
              <div className="card detailmanage__moviePoster">
                <img
                  src={
                    formUpdate.image
                      ? `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${formUpdate.image}`
                      : poster
                  }
                  alt=""
                  className="detailmanage__movieCardImg"
                />
              </div>
            </div>
            <div className="col-9 detailmanage__desRes">
              <div className="row">
                <div className="col-5 detailmanage__form">
                  <div className="nameForm">
                    <label className="form-label">Movie Name</label>
                    <select
                      name="name"
                      className="detailmanageschedule__bar d-flex"
                      onChange={handleChangeFormUpdate}
                      onClick={showImageMovie}
                    >
                      <option value={formUpdate.name}>{formUpdate.name}</option>
                      {props.data.data.map((movie) => (
                        <option value={movie.name} key={movie.id}>
                          {movie.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="directorForm">
                    <label className="form-label">Price</label>
                    <input
                      className="detailmanageschedule__bar d-flex"
                      type="text"
                      value={formUpdate.price}
                      placeholder="Write ticket price"
                      name="price"
                      onChange={handleChangeFormUpdate}
                    />
                  </div>
                  <div className="releaseForm">
                    <label className="form-label">Premiere</label>
                    <div>
                      <button
                        className={
                          formUpdate.premiere === "ebv.id"
                            ? "detailmanageschedule__buttonPremiereActive"
                            : "detailmanageschedule__buttonPremiere"
                        }
                        onClick={() => changePremiere({ premiere: "ebv.id" })}
                      >
                        <img className="detailmanageschedule__buttonImg" src={sponsor1} />
                      </button>
                      <button
                        className={
                          formUpdate.premiere === "cineone21"
                            ? "detailmanageschedule__buttonPremiereActive"
                            : "detailmanageschedule__buttonPremiere"
                        }
                        onClick={() => changePremiere({ premiere: "cineone21" })}
                      >
                        <img className="detailmanageschedule__buttonImg" src={sponsor2} />
                      </button>
                      <button
                        className={
                          formUpdate.premiere === "hiflix"
                            ? "detailmanageschedule__buttonPremiereActive"
                            : "detailmanageschedule__buttonPremiere"
                        }
                        onClick={() => changePremiere({ premiere: "hiflix" })}
                      >
                        <img className="detailmanageschedule__buttonImg" src={sponsor3} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-5 detailmanage__form">
                  <div className="categoryForm">
                    <label className="form-label">Location</label>
                    <select
                      name="location"
                      className="detailmanageschedule__bar d-flex"
                      onChange={handleChangeFormUpdate}
                    >
                      <option value={formUpdate.location}>{formUpdate.location}</option>
                      <option value="Banyuwangi">Banyuwangi</option>
                      <option value="Jember">Jember</option>
                      <option value="Surabaya">Surabaya</option>
                      <option value="Sidoarjo">Sidoarjo</option>
                      <option value="Malang">Malang</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <div className="hourForm">
                        <label className="form-label">Date Start</label>
                        <input
                          className="detailmanageschedule__barhalf d-flex"
                          type="date"
                          value={formUpdate.dateStart}
                          placeholder={formUpdate.dateStart}
                          name="dateStart"
                          onChange={handleChangeFormUpdate}
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="minuteForm">
                        <label className="form-label">Date End</label>
                        <input
                          className="detailmanageschedule__barhalf d-flex"
                          type="date"
                          value={formUpdate.dateEnd}
                          placeholder={formUpdate.dateEnd}
                          name="dateEnd"
                          onChange={handleChangeFormUpdate}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="castForm">
                    <label className="form-label">Time</label>
                    {showInputTime ? (
                      <input type="text" onKeyPress={handleAddTime} />
                    ) : (
                      <button onClick={() => setShowInputTime(true)}>+</button>
                    )}
                    <div className="row">
                      {formUpdate.timePart
                        ? formUpdate.timePart.map((item) => (
                            <div className="col-auto mx-2" key={item}>
                              {item}
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row detailmanage__buttonPositonSchedule">
            {formUpdate.post ? (
              <div className="col-auto">
                <button className="btn detailmanage__buttonPost" onClick={handlePost}>
                  Post
                </button>
              </div>
            ) : (
              <div className="col-auto">
                <button className="btn detailmanage__buttonPost" onClick={handleClear}>
                  Clear
                </button>
              </div>
            )}
            <div className="col-auto">
              <button className="btn detailmanage__buttonRes" onClick={handleResetUpdate}>
                Reset
              </button>
            </div>
            <div className="col-auto">
              <button className="btn detailmanage__buttonRes" onClick={handleSubmitUpdate}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default DetailScheduleManage;
