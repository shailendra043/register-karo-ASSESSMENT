// Import necessary modules
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import teams from '../assets/teams.png';

const AboutSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-lg-6 col-md-12">
          <h6 className="text-uppercase text-warning">Welcome to Registerkaro.in</h6>
          <h2 className="fw-bold">
            About <span className="text-warning">Register Karo</span>
          </h2>
          <p className="text-muted mt-3">
            We have been using Intelegencia as our DevOps vendor for our field service applications
            over the last couple of years and I'm extremely pleased with their performance, ability
            to execute, and willingness to adapt in our ever-changing environment. Perry is an
            outstanding leader who is fanatical about customer satisfaction. He has built a solid
            team which has consistently delivered on projects thereby exceeding everyone’s
            expectations.
          </p>
          <p className="text-muted">
            I would strongly recommend their services to any organization that is looking for solid,
            reliable, and predictable outcomes.
          </p>
          <button className="btn btn-primary px-4 mt-3">Learn More</button>
        </div>

        {/* Image Content */}
        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
          <div className="position-relative">
            <img
              src={teams}
              alt="Team"
              className="img-fluid rounded"
              style={{ maxHeight: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
            {/* Add decorative shapes */}
            <div
              className="position-absolute top-0 start-100 translate-middle bg-warning rounded-circle"
              style={{ width: '100px', height: '40vh' , right: '50px' }}
            ></div>
            <div
              className="position-absolute bottom-0 end-0 bg-primary rounded-circle"
              style={{ width: '80px', height: '80px', opacity: 0.2 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
