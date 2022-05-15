import React from "react";
import siluet from "../../assets/movie1.png";
import "./index.css";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import lineBook from "../../assets/Line 29.png";
import { useState, useEffect } from "react";

function Card(props) {
  const { id, time, price, location, premiere } = props.data;
  return (
    <div className="col-md-auto mb-3" key={id}>
      <div className="card cardSchedule__booknow">
        <div className="row">
          <div className="col-5">
            <img
              src={
                premiere === "ebv.id" ? sponsor1 : premiere === "cineone21" ? sponsor2 : sponsor3
              }
              alt=""
              className="cardSchedule__booknowImg"
            />
          </div>
          <div className="col-7">
            <p className="cardSchedule__cardTitle">{premiere}</p>
            <p className="cardSchedule__cardDes">{location}</p>
          </div>
        </div>
        <img src={lineBook} alt="" className="cardSchedule__cardLine" />
        <div className="row">
          {time.split(",").map((time) => (
            <div className="col-md-3" key={time}>
              <button className="btn cardSchedule__cardTime">{time}</button>
            </div>
          ))}
        </div>
        <br />
        <img src={lineBook} alt="" className="cardSchedule__cardLine" />
        <div className="row">
          <div className="col-6">
            <p className="cardSchedule__price">Price</p>
          </div>
          <div className="col-6">
            <p className="cardSchedule__priceContent">{"Rp. " + price + "/seat"}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <button
              className="cardSchedule__updateButton"
              onClick={() => props.setUpdate(props.data)}
            >
              Update
            </button>
          </div>
          <div className="col-auto">
            <button
              className="cardSchedule__deleteButton"
              onClick={() => props.deleteData(props.data.id)}
            >
              delete
            </button>
          </div>
        </div>
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
