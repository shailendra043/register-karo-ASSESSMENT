import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../assets/Pagination.png";
import contact from "../assets/contact.png";
import file from "../assets/file.png"; 
import process from "../assets/process.png"; 
import mail from "../assets/mail.png"; 

const HappyClientsAndApplicationProcess = () => {
  const steps = [
    {
      image: file,
      text: "Fill up Application Form",
      bgColor: "#f26d6d",
    },
    {
      image: contact,
      text: "Make Online Payment",
      bgColor: "#27AE60",
    },
    {
      image: process,
      text: "Executive will Process Application",
      bgColor: "#F2994A",
    },
    {
      image: mail,
      text: "Get Confirm Mail",
      bgColor: "#b0bec5",
    },
  ];

  return (
    <div>
      {/* Happy Clients Section */}
      <div className="container text-center my-5">
        <h2 className="mb-3">Our Happy Clients</h2>
        <p className="mb-4">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state-of-the-art customer service.
        </p>

        {/* Banner Section */}
        <div className="banner my-4 text-md-end text-center">
          <img
            src={Pagination}
            alt="Banner"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <button className="btn mt-4">Show more →</button>
      </div>

      {/* Application Process Section */}
      <div className="container-fluid application py-4">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="col-12 col-md-3 d-flex flex-row align-items-center my-3"
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{
                    backgroundColor: step.bgColor,
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.text}
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="mb-0 text-start">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClientsAndApplicationProcess;
