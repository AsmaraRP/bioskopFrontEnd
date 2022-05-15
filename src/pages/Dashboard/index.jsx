import "./index.css";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import chart from "../../assets/dashboardchart.png";

function Dashboard() {
  return (
    <>
      <NavbarAdmin />
      <div className="dashboard__main">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h1 className="viewall__listTitle">Dashboard</h1>
              <div className="dashboard__chart">
                <img src={chart} />
              </div>
            </div>
            <div className="col-3">
              <h1 className="viewall__listTitle">Filtered</h1>
              <div className="dashboard__filter">
                <select name="selectMovie" className="dashboard__selectmovie">
                  <option value="ASC">Select Movie</option>
                </select>
                <select name="selectMovie" className="dashboard__selectmovie">
                  <option value="ASC">Select Premiere</option>
                </select>
                <select name="selectMovie" className="dashboard__selectmovie">
                  <option value="ASC">Select Location</option>
                </select>
                <button className="btn dashboard__button">Filter</button>
                <button className="btn dashboard__button">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Dashboard;
