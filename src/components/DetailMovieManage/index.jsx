import "./index.css";
import poster from "../../assets/poster.png";
import { useState, useEffect } from "react";

function DetailMovieManage(props) {
  const [formUpdate, setFormUpdate] = useState({
    ...props.data,
    releaseDatePart: "",
    durationHour: "",
    durationMinute: ""
  });
  useEffect(() => {
    setFormUpdate({ ...props.data, releaseDatePart: "", durationHour: "", durationMinute: "" });
  }, [props.data]);
  const [formImage, setFormImage] = useState(null);
  const handleChangeFormUpdate = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setFormUpdate({ ...formUpdate, [name]: files[0] });
      console.log(files[0]);
      setFormImage(URL.createObjectURL(files[0]));
    } else {
      setFormUpdate({ ...formUpdate, [name]: value });
    }
  };
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    setFormUpdate({
      ...formUpdate,
      releaseDate: formUpdate.releaseDatePart ? formUpdate.releaseDatePart : formUpdate.releaseDate,
      duration: formUpdate.durationHour + ":" + formUpdate.durationMinute
    });
    const formSendUpdate = {
      releaseDate: formUpdate.releaseDatePart,
      name: formUpdate.name,
      category: formUpdate.category,
      synopsis: formUpdate.synopsis,
      image: formUpdate.image,
      director: formUpdate.director,
      cast: formUpdate.cast,
      duration: formUpdate.durationHour + ":" + formUpdate.durationMinute
    };
    if (typeof formUpdate.image !== "string") {
      const formData = new FormData();
      for (const data in formSendUpdate) {
        formData.append(data, formSendUpdate[data]);
      }
      props.dataUpdate(formData);
    } else {
      props.dataUpdate(formSendUpdate);
    }
  };
  const handleResetUpdate = (e) => {
    e.preventDefault();
    setFormUpdate({ ...props.data, releaseDatePart: "", durationHour: "", durationMinute: "" });
  };
  const handleClear = (e) => {
    setFormUpdate({
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
  };
  const handlePost = (e) => {
    setFormUpdate({
      ...formUpdate,
      releaseDate: formUpdate.releaseDatePart ? formUpdate.releaseDatePart : formUpdate.releaseDate,
      duration: formUpdate.durationHour + ":" + formUpdate.durationMinute
    });
    const formSend = {
      releaseDate: formUpdate.releaseDatePart,
      name: formUpdate.name,
      category: formUpdate.category,
      synopsis: formUpdate.synopsis,
      image: formUpdate.image,
      director: formUpdate.director,
      cast: formUpdate.cast,
      duration: formUpdate.durationHour + ":" + formUpdate.durationMinute
    };
    const formData = new FormData();
    for (const data in formSend) {
      formData.append(data, formSend[data]);
    }
    // for (const data of formData.entries()) {
    //   console.log(data[0] + ", " + data[1]);
    // }
    props.postData(formData);
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
                      ? formImage
                        ? formImage
                        : `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${formUpdate.image}`
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
                    <input
                      className="detailmanage__bar d-flex"
                      type="text"
                      placeholder="Write your movie name"
                      name="name"
                      onChange={handleChangeFormUpdate}
                      value={formUpdate.name}
                    />
                  </div>
                  <div className="directorForm">
                    <label className="form-label">Director</label>
                    <input
                      className="detailmanage__bar d-flex"
                      type="text"
                      value={formUpdate.director}
                      placeholder="Write your director"
                      name="director"
                      onChange={handleChangeFormUpdate}
                    />
                  </div>
                  <div className="releaseForm">
                    <label className="form-label">Release Date</label>
                    <input
                      className="detailmanage__bar d-flex"
                      type="date"
                      value={formUpdate.releaseDatePart}
                      placeholder={formUpdate.releaseDate.split("T")[0]}
                      name="releaseDatePart"
                      onChange={handleChangeFormUpdate}
                    />
                  </div>
                  <div className="imageForm">
                    <input type="file" name="image" onChange={handleChangeFormUpdate} />
                  </div>
                </div>
                <div className="col-5 detailmanage__form">
                  <div className="categoryForm">
                    <label className="form-label">Category</label>
                    <input
                      className="detailmanage__bar d-flex"
                      type="text"
                      value={formUpdate.category}
                      placeholder="Write your category"
                      name="category"
                      onChange={handleChangeFormUpdate}
                    />
                  </div>
                  <div className="castForm">
                    <label className="form-label">Cast</label>
                    <input
                      className="detailmanage__bar d-flex"
                      type="text"
                      value={formUpdate.cast}
                      placeholder="Write your cast"
                      name="cast"
                      onChange={handleChangeFormUpdate}
                    />
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <div className="hourForm">
                        <label className="form-label">Duration Hour</label>
                        <input
                          className="detailmanage__barhalf d-flex"
                          type="text"
                          value={formUpdate.durationHour}
                          placeholder={formUpdate.duration.split(":")[0]}
                          name="durationHour"
                          onChange={handleChangeFormUpdate}
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="minuteForm">
                        <label className="form-label">Duration Minute</label>
                        <input
                          className="detailmanage__barhalf d-flex"
                          type="text"
                          value={formUpdate.durationMinute}
                          placeholder={formUpdate.duration.split(":")[1]}
                          name="durationMinute"
                          onChange={handleChangeFormUpdate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row detailmanage__synopsis">
            <div className="col-auto synopsisForm">
              <label className="form-label">Synopsis</label>
              <input
                className="detailmanage__barfull d-flex"
                type="text"
                value={formUpdate.synopsis}
                placeholder="Write your synopsis"
                name="synopsis"
                onChange={handleChangeFormUpdate}
              />
            </div>
          </div>
          <div className="row detailmanage__buttonPositon">
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
export default DetailMovieManage;
