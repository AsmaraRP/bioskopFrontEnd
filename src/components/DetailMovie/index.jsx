import "./index.css";
import poster from "../../assets/movie1.png";
import lineDetail from "../../assets/Line 12.png";

function DetailMovie(props) {
  const { name, category, image, releaseDate, synopsis, duration, director, cast } = props.data;
  return (
    <div className="detail__movieDetail">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card detail__moviePoster">
              <img src={image} alt="" className="detail__movieCardImg" />
            </div>
          </div>
          <div className="col-9">
            <h1 className="detail__titleMovie">{name}</h1>
            <p className="detail__genreMovie">{category}</p>
            <div className="row">
              <div className="col-4 detail__listDetail">
                <p className="detail__menuDetail">Release date</p>
                <p className="detail__contentDetail">{releaseDate}</p>
                <p className="detail__menuDetail">Duration</p>
                <p className="detail__contentDetail">{duration}</p>
              </div>
              <div className="col-4">
                <p className="detail__menuDetail">Directed by</p>
                <p className="detail__contentDetail">{director}</p>
                <p className="detail__menuDetail">Cast</p>
                <p className="detail__contentDetail">{cast}</p>
              </div>
            </div>
            <img src={lineDetail} alt="" className="detail__lineDetail" />
            <h3 className="detail__synopsisTitle">Synopsis</h3>
            <p className="detail__synopsisContent">{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
DetailMovie.defaultProps = {
  image: poster,
  releaseDate: "Release Date is none",
  synopsis: "Synopsis is none",
  duration: "Duration is none",
  director: "Director is none",
  cast: "Cast is none"
};
export default DetailMovie;
