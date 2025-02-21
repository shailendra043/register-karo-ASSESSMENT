import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mobile from "../assets/mobile.png";

const stats = [
  { number: "1M+", label: "CUSTOMERS" },
  { number: "12+", label: "YEARS OF EXCELLENCE" },
  { number: "41+", label: "R&D ENGINEERS" },
  { number: "78+", label: "COUNTRIES" },
  { number: "3287+", label: "PARTNERS" },
  { number: "41+", label: "AWARDS RECEIVED" },
];

const Promotion = () => {
  return (
    <div>
      {/* Promotion Section */}
      <div className="container-fluid bg-promotion text-white py-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold">Manage Your Services by your Mobile Phone</h1>
            <p className="lead">
              Download our app to manage and track your services. Our app enables
              you to stay in touch with our experts and aids you in tracking your
              progress.
            </p>
            <button className="btn btn-light btn-lg me-2">Get the App</button>
            <button className="btn btn-outline-light btn-lg">Learn More</button>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center">
            <img
              src={mobile}
              alt="App Screenshot"
              className="img-fluid"
              
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container text-center py-5">
        <h5 className="text-warning mb-3">WHY REGISTER KARO</h5>
        <h2 className="fw-bold mb-4">Some Numbers are Important</h2>

        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <h3 className="fw-bold text-number">{stat.number}</h3>
              <p className="text-uppercase text-secondary mb-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
