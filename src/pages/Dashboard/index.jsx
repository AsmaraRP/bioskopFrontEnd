import "./index.css";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";
import { useState } from "react";

function Dashboard() {
  const movie1 = [200, 300, 300, 500, 600, 800, 400, 500, 300, 200, 600, 800];
  const movie2 = [300, 400, 500, 700, 300, 500, 300, 400, 500, 600, 500, 200];
  const [profite, setProfite] = useState(movie1);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
    datasets: [
      {
        label: "Profit in million rupiah",
        fill: false,
        backgroundColor: "#5f2eea",
        borderColor: "#5f2eea",
        data: profite
        // data: dataIncome[3] ? dataIncome : {incomeDefault},
        // yAxisID: "y-axis-1",
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      yAxis: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  return (
    <>
      <NavbarAdmin />
      <div className="dashboard__main">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h1 className="viewall__listTitle">Dashboard</h1>
              <div className="dashboard__chart">
                <Line data={data} options={options} />
              </div>
            </div>
            <div className="col-3">
              <h1 className="viewall__listTitle dashboard__menu">Filtered</h1>
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
                <button className="btn dashboard__button" onClick={() => setProfite(movie1)}>
                  Filter
                </button>
                <button className="btn dashboard__button" onClick={() => setProfite(movie2)}>
                  Reset
                </button>
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
