import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import estate1 from "./images/estate1.jpeg";
import estate2 from "./images/estate2.jpg";
import estate3 from "./images/estate3.jpg";

import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import "./start.css";

const MainStartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="start-home">
      <Header />
      <div>
        <div className="card mt-3" style={{ border: "none" }}>
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card m-5" style={{ border: "none" }}>
                <div className="card-body">
                  <h1 className="card-title" style={{ fontWeight: "bolder" }}>
                    Welcome to UrbanNest
                  </h1>
                  <br />
                  <h4 className="card-text">
                    "Find Your Dream Home in the Heart of the City" "Discover
                    Urban Living at Its Finest."
                  </h4>
                  <p>
                    “Discover a better way to find your next city home. At
                    UrbanNest, we simplify the search for urban properties,
                    giving you a customized, user-friendly experience with
                    cutting-edge AI technology. Whether you're looking to live,
                    work, or invest in the city, UrbanNest makes the process as
                    easy as possible. Let us help you land the perfect nest!”
                  </p>
                  <Link
                    to={"/home"}
                    className="btn btn-primary"
                    style={{ width: "10rem" }}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={estate3}
                        className="mainPageImg"
                        alt="estate image"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={estate2}
                        className="mainPageImg"
                        alt="estate image"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={estate1}
                        className="mainPageImg"
                        alt="estate image"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainStartPage;
