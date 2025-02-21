import React from "react";
import bulb from "../assets/bulb.png";
import Display from "../assets/Display.png";


const VideoIntroduction = () => {
  return (
    <div className="container-fluid video-section py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold text-white align-item-center">Our Video Introductions</h2>
          <p className="text-light mb-4">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div className="d-flex mb-3">
            <div className="me-3">
              <img
                src={bulb}
                alt="Lightbulb Icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
            </div>
            <div>
              <h5 className="text-white mb-1">Explore ideas together</h5>
              <p className="text-light mb-0">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="me-3">
              <img
                src={Display}
                alt="Arrow Icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
            </div>
            <div>
              <h5 className="text-white mb-1">Bring those ideas to life</h5>
              <p className="text-light mb-0">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroduction;
