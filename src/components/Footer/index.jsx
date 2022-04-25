import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logoblue.png";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import iconfb from "../../assets/iconFB.png";
import iconig from "../../assets/iconIG.png";
import icontw from "../../assets/iconTwitter.png";
import iconyt from "../../assets/iconYT.png";

function Footer() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  return (
    <div className="footer__Main">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="" className="footer__Logo" />
            <p className="footer__textCol1">
              Stop waiting in line. Buy tickets conventiently, watch movie quietly
            </p>
          </div>
          <div className="col-md-2">
            <h2 className="footer__textCol2">Explore</h2>
            <div className="row mb-3">
              <button className="footer__Page" onClick={() => handleNavigate("home")}>
                Home
              </button>
            </div>
            <div className="row">
              <button className="footer__Page" onClick={() => handleNavigate("list-movie")}>
                List Movie
              </button>
            </div>
          </div>
          <div className="col-md-3 footer__ourSponsor">
            <h2 className="footer__textCol2">Our Sponsor</h2>
            <div className="mb-4">
              <img src={sponsor1} alt="" className="footer__sponsor" />
            </div>
            <div className="mb-4">
              <img src={sponsor2} alt="" className="footer__sponsor sp2" />
            </div>
            <div className="mb-4">
              <img src={sponsor3} alt="" className="footer__sponsor sp3" />
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="footer__textCol2">Follow Us</h2>
            <div className="row footer__contact">
              <div className="col-1">
                <img src={iconfb} alt="" className="fb" />
              </div>
              <div className="col-11">
                <p className="footer__hideResp">Tickitz Cinema Id</p>
              </div>
            </div>
            <div className="row footer__contact">
              <div className="col-1">
                <img src={iconig} alt="" className="ig" />
              </div>
              <div className="col-11">
                <p className="footer__hideResp">tickitz.id</p>
              </div>
            </div>
            <div className="row footer__contact">
              <div className="col-1">
                <img src={icontw} alt="" className="tweeter" />
              </div>
              <div className="col-11">
                <p className="footer__hideResp">tickitz.id</p>
              </div>
            </div>
            <div className="row footer__contact">
              <div className="col-1">
                <img src={iconyt} alt="" className="yt" />
              </div>
              <div className="col-11">
                <p className="footer__hideResp">Tickitz Cinema Id</p>
              </div>
            </div>
          </div>
        </div>
        <p className="footer__copyRight">&copy; 2022 Tickitz. All Right Reserved</p>
      </div>
    </div>
  );
}
export default Footer;
