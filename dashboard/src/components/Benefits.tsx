import { Link } from "react-router-dom";
import "./Benefits.css";
import benefitPageGraphic from "../assets/BenefitsPageGraphic.png";
import abstractWaves from "../assets/AbstractWaves.png";

interface Benefit {
  icon: string;
  title: string;
  description: string;
  linkTo: string;
}

const benefitsData: Benefit[] = [
  {
    icon: "fa-industry",
    title: "State of the art facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aperiam delectus...",
    linkTo: "contact/",
  },
  {
    icon: "fa-school",
    title: "100's of diverse classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quos eligendi rem...",
    linkTo: "contact/",
  },
  {
    icon: "fa-medal",
    title: "Expert and pro Trainers",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis delectus repellendus...",
    linkTo: "contact/",
  },
];

function Benefits() {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <div className="container mw-75 text-left">
        <h3 className="text-uppercase fs-2 mb-4">more than just gym</h3>
        <p className="w-7">
          We provide world-class fitness equipment, trainers, and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </div>

      <div className="container text-center cards">
        <div className="row">
          {benefitsData.map((benefit, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 p-5">
                <div className="card-img-top">
                  <i className={`fa-solid fa-${benefit.icon}`}></i>
                </div>
                <div className="card-body">
                  <div className="card-title">{benefit.title}</div>
                  <div className="card-text">
                    <p>{benefit.description}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <Link className="text-danger" to={benefit.linkTo}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <img src={benefitPageGraphic} alt="" />
          </div>
          <div className="col-md-2">
            <img src={abstractWaves} alt="waves" />
          </div>
          <div className="col-md-7">
            <div className="container mt-5" style={{ marginTop: "150px" }}>
              <h1 className="text-touppercase fw-bolder mt-5">
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-danger">FIT</span>
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                quisquam at voluptate accusamus amet animi tenetur mollitia
                explicabo neque minima impedit expedita rerum unde cum, illum,
                placeat perferendis! Obcaecati perspiciatis et dolore culpa nemo
                nihil optio voluptas odio. Animi ipsam nisi provident reiciendis
                eos sint cupiditate minima voluptas quia quam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sunt consequatur eum pariatur similique veritatis, animi
                praesentium temporibus. Impedit, voluptas.
              </p>

              <Link className="btn btn-warning px-5 mt-3" to={"contact"}>
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
