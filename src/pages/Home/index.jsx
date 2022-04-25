import NavBar from "../../components/Navbar";
import "./index.css";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Membership from "../../components/Membership";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="container isi"></div>
      <Membership />
      <Footer />
    </>
  );
}
export default Home;
