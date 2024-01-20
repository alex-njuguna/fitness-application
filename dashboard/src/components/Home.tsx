import logo from "../assets/HomePageText.png";
import homePageGraphic from "../assets/HomePageGraphic.png";
import redBull from "../assets/SponsorRedBull.png";
import forbes from "../assets/SponsorForbes.png";
import fortune from "../assets/SponsorFortune.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container custom-container-spacing">
      <div className="row">
        <div className="col-md-6" style={{ marginTop: "100px" }}>
          <img src={logo} alt="logo..." />
          <p className="mt-4 fs-6">
            {" "}
            <em>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </em>
          </p>

          <div className="container" style={{ marginTop: "50px" }}>
            <Link className="btn btn-warning px-5 fs-6" to={"contact/"}>
              Join Now
            </Link>
            <Link className="text-danger mx-5" to={"contact/"}>
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src={homePageGraphic} alt="home page graphic" />
        </div>
      </div>

      {/* sponsors */}
      <div
        className="row p-5 rounded sponsors"
        style={{ background: "#ffe5f1" }}
      >
        <div className="col-md-3">
          <img src={redBull} alt="redbull logo" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-md-3">
          <img src={forbes} alt="forbes logo" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-md-3">
          <img src={fortune} alt="fortune logo" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Home;
