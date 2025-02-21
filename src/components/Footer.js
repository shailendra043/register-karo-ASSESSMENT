import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer text-light py-5">
      <div className="container footer">
        <div className="row text-center text-md-start">
          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold text-warning">About</h6>
            <p>
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-google fs-4"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-apple fs-4"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              {/* New Social Media Links */}
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold text-warning">Start a Business</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold text-warning">
              Government Registration
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold text-warning">
              Compliance & Tax
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Channels
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Scale
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Watch the Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Our Competition
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold text-warning">BIS & CDSCO</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <a href="#" className="btn btn-warning rounded-circle p-2">
            <i className="bi bi-arrow-up text-white"></i>
          </a>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
