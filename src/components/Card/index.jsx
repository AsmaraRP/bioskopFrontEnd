import React from "react";
import siluet from "../../assets/movie1.png";
import "./index.css";

function Card(props) {
  const { id, name, category, image } = props.data;
  return (
    <div className="now__card">
      <div className="card-body now__movieShow">
        <img
          src={
            image
              ? `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${image}`
              : { siluet }
          }
          className="now__movieCardImg"
          alt="..."
        />
        <h5 className="now__titleMovieShow">
          {name.length >= 10 ? name.substring(0, 10) + "..." : name}
        </h5>
        <p className="now__desMovieShow">{category}</p>
        <button className="btn now__btnMovieShow" onClick={() => props.handleDetail(id)}>
          Detail
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
