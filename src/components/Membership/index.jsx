import "./index.css";
import membershipMotto from "../../assets/membershipMotto.png";
function Membership() {
  return (
    <section className="membershipCard">
      <div className="container">
        <div className="cardMainMembership">
          <div className="row d-flex justify-content-center">
            <img src={membershipMotto} alt="" className="membership__moviegoers" />
          </div>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-end">
              <input className="membership__emailForm" type="text" placeholder="Typer your email" />
            </div>
            <div className="col-md-6 d-flex justify-content-start">
              <button className="btn btn-outline-success membership__buttonResponse" type="submit">
                Join Now
              </button>
            </div>
          </div>
          <p className="membership__textResponse">By Joining as a Tickits member,</p>
          <p className="membership__textResponse2">
            we will always send you the latest updates vie email
          </p>
        </div>
      </div>
    </section>
  );
}
export default Membership;
