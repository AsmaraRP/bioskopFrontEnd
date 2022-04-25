import "./index..css";
import mottoBanner from "../../assets/motto.png";
import bannerMain from "../../assets/banner_img.png";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={mottoBanner} alt="" className="banner__motto" />
          </div>
          <div className="col-6">
            <img src={bannerMain} alt="" className="banner_img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
