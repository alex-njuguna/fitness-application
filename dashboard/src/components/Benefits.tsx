import { Link } from "react-router-dom";
import "./Benefits.css";

function Benefits() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="container mw-75 text-left">
        <h3 className="text-uppercase fs-2 mb-4">more than just gym</h3>
        <p className="w-7">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100 m-3 p-4">
              <div className="card-img-top">
                <i className="fa-solid fa-industry"></i>
              </div>
              <div className="card-body">
                <div className="card-title">state of the art facilities</div>
                <div className="card-text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam aperiam delectus doloribus consequuntur ducimus neque
                    explicabo tempore. Saepe voluptate, consequuntur sequi illo
                    reprehenderit dolorem quae fugiat, iusto nulla, repellendus
                    unde.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <Link className="text-danger" to={"contact/"}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 m-3 p-4">
              <div className="card-img-top">
                <i className="fa-solid fa-school"></i>
              </div>
              <div className="card-body">
                <div className="card-title">100's of diverse classes</div>
                <div className="card-text">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi quos eligendi rem quae sequi temporibus magnam facere
                    ad vero porro labore possimus, fugit hic impedit itaque ab
                    esse. Laborum, placeat!
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <Link className="text-danger" to={"contact/"}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 m-3 p-4">
              <div className="card-img-top">
                <i className="fa-solid fa-medal"></i>
              </div>
              <div className="card-body">
                <div className="card-title">Expert and pro Trainers</div>
                <div className="card-text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis delectus repellendus iste pariatur sint ullam
                    mollitia dolor minus modi facilis, enim hic laborum aliquid
                    placeat necessitatibus eos adipisci, accusantium
                    dignissimos.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <Link className="text-danger" to={"contact/"}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
