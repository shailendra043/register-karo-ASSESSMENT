import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import coin from "../assets/coin.png";
import spotify from "../assets/spotify.png";
import slack from "../assets/slack.png";
import drop from "../assets/drop.png";
import web from "../assets/web.png";
import zoom from "../assets/zoom.png";

const HeroWithLogoShowcase = () => {
  const logos = [
    { name: "Coinbase", src: coin, alt: "Coinbase" },
    { name: "Spotify", src: spotify, alt: "Spotify" },
    { name: "Slack", src: slack, alt: "Slack" },
    { name: "Dropbox", src: drop, alt: "Dropbox" },
    { name: "Webflow", src: web, alt: "Webflow" },
    { name: "Zoom", src: zoom, alt: "Zoom" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center">
        <div className="container text-center">
          {/* Header Section */}
          <h6 className="text-uppercase text-light mb-2">1% of the industry</h6>
          <h1 className="text-white fw-bold mb-4">
            Welcome to your new digital reality. Now.
          </h1>

          {/* Email Input Form */}
          <form className="d-flex justify-content-center mb-4">
            <div className="input-group" style={{ maxWidth: "500px" }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                aria-label="Email"
                aria-describedby="submit-button"
                required
              />
              <button
                className="btn btn-warning text-white fw-bold"
                type="submit"
                id="submit-button"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Feature List */}
          <div className="row justify-content-center text-light">
            <div className="col-auto mb-2">
              <span className="me-2">✔</span> Instant results
            </div>
            <div className="col-auto mb-2">
              <span className="me-2">✔</span> User-friendly interface
            </div>
            <div className="col-auto mb-2">
              <span className="me-2">✔</span> Personalized customization
            </div>
          </div>
        </div>
      </div>

      {/* Logo Showcase Section */}
      <div className="container py-5">
        <div className="row justify-content-center align-items-center text-center">
          {logos.map((logo, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroWithLogoShowcase;
