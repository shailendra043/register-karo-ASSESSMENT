// import React from "react";
// import { Container, Row, Col, Button, } from "react-bootstrap";
// import Section from "../assets/Section.png"; 
// import bans from "../assets/bans.png"; 
// import { FaPlayCircle } from "react-icons/fa"; 

// const HeroSection = () => {
//   return (
//     <section
//       className="hero-section d-flex align-items-center text-white"
//       style={{
//         backgroundImage: `url(${Section})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         height: "600px",
//         className: "image-fluid",
//       }}
//     >
//       <Container>
//         <Row className="align-items-center">
//           {/* Left Content */}
//           <Col md={7} className="text-start">
//             <p className="text-warning fw-bold mb-2">
//               ⭐ Google Rating | 4.5+ Customer Rating
//             </p>
//             <h1 className="display-4 fw-bold mb-3 text-dark">
//               Your trusted partner for compliance business needs
//             </h1>
//             <p className="lead  text-dark">
//               An online business compliance platform that helps entrepreneurs
//               and other individuals with various registrations, tax filings, and
//               legal matters.
//             </p>
//             <div className="gap-3">
//                 <img
//                 src={bans}
//                 alt="bans"
//                 />
//             </div>
//             <div className="d-flex gap-3 mt-4">
//               <Button size="lg" className="btn-expert px-4">
//                 Talk An Expert
//               </Button>
//               <Button variant="outline-light text-dark d-flex align-items-center gap-2" size="lg">
//               <FaPlayCircle 
//                   onClick={() => alert("Icon clicked!")} 
//                   style={{ cursor: "pointer", color: "#DC5247" }} 
//                   />
//                   <span>See how it works</span>
                  
//                   </Button>             
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Section from "../assets/Section.png";
import bans from "../assets/bans.png";
import { FaPlayCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="hero-section d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${Section})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "600px",
        
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={7} sm={12} className="text-start">
            <p className="text-warning fw-bold mb-2 fs-6">
              ⭐ Google Rating | 4.5+ Customer Rating
            </p>
            <h1 className="fw-bold mb-3 text-dark fs-1">
              Your trusted partner for compliance business needs
            </h1>
            <p className="lead text-dark fs-5">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various registrations, tax filings, and
              legal matters.
            </p>
            <div className="gap-3">
              <img
                src={bans}
                alt="bans"
                className="img-fluid mt-3"
                style={{ maxWidth: "80%" }}
              />
            </div>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button size="lg" className="btn-expert px-4">
                Talk An Expert
              </Button>
              <Button
                variant="outline-light text-dark d-flex align-items-center gap-2"
                size="lg"
              >
                <FaPlayCircle
                  onClick={() => alert("Icon clicked!")}
                  style={{ cursor: "pointer", color: "#DC5247" }}
                />
                <span>See how it works</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
