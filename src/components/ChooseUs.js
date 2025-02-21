import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Symbol from "../assets/Symbol.png";
import Symbol1 from "../assets/Symbol1.png";
import Symbol2 from "../assets/Symbol2.png";
import Symbol3 from "../assets/Symbol3.png";
import Symbol4 from "../assets/Symbol4.png";

const WhyChooseUs = () => {
  const features = [
    {
      image: Symbol,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgClass: "bg-light-danger",
    },
    {
      image: Symbol1,
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      bgClass: "bg-light-success",
    },
    {
      image: Symbol2,
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
      bgClass: "bg-light-primary",
    },
    {
      image: Symbol3,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgClass: "bg-light-pink",
    },
    {
      image: Symbol4,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgClass: "bg-light-warning",
    },
  ];

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-warning mb-2">
          Why RegisterKaro.in
        </h6>
        <h2 className="fw-bold mb-3">Why Choose Register Karo</h2>
        <p className="text-muted">
          It is with consistent services and results that build trust with the
          people and that in turn help us to serve the business better.
        </p>
      </div>

      {/* Features Section */}
      <div className="row">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
          >
            <div
              className={`p-4 rounded-3 shadow-sm text-center ${feature.bgClass}`}
              style={{ minHeight: "200px", width: "100%", maxWidth: "300px" }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-3"
                style={{ height: "50px", width: "50px" }}
              />
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
