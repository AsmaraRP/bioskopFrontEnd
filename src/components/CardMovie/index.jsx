import React from "react";
import siluet from "../../assets/movie1.png";
import "./index.css";

function Card(props) {
  const { id, name, category, image } = props.data;
  return (
    <div className="cardmovie__card mb-3">
      <div className="card-body fix__movieShow">
        <img
          src={
            image
              ? `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${image}`
              : { siluet }
          }
          className="fix__movieCardImg"
          alt="..."
        />
        <h5 className="fix__titleMovieShow">{name}</h5>
        <p className="fix__desMovieShow">{category}</p>
        <button className="btn cardmovie__btnUpdate" onClick={() => props.setUpdate(props.data)}>
          Update
        </button>
        <button className="btn cardmovie__btnDelete" onClick={() => props.deleteData(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

Card.defaultProps = {
  id: "1",
  name: "movie",
  category: "Default Category"
};

export default Card;
