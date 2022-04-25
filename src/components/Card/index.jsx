import React from "react";

function Card(props) {
  const { id, name, category } = props;
  const image = "vxyfddgxlx5fr8ma2wxm.png";

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={
          image
            ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1648786582/Tickitz/movie/${image}`
            : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <span>img : {image}</span>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{category}</p>
        <button className="btn btn-primary" onClick={() => props.handleDetail(id)}>
          Detail
        </button>
      </div>
    </div>
  );
}

Card.defaultProps = {
  category: "Default Category"
};

export default Card;
