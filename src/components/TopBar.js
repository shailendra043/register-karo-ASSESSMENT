// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";


// const TopBar = () => {
//   return (
//     <div className="Top-Bar text-white py-2">
//       <Container>
//         <Row className="align-items-center">
//           {/* Left Content */}
//           <Col md={6} xs={12} className="text-md-start text-center">
//             <FaEnvelope className="me-2" />
//             <a
//               href="mailto:www.registerkaro.in"
//               className="text-white text-decoration-none"
//             >
//               www.registerkaro.in
//             </a>
//             <span className="mx-3">|</span>
//             <FaPhoneAlt className="me-2" />
//             <a
//               href="tel:+918447746183"
//               className="text-white text-decoration-none"
//             >
//               +91 8447746183
//             </a>
//           </Col>

//           {/* Right Content */}
//           <Col md={6} xs={12} className="text-md-end text-center mt-2 mt-md-0">
//             <a
//               href="https://instagram.com"
//               className="text-white me-3"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://facebook.com"
//               className="text-white me-3"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://twitter.com"
//               className="text-white me-3"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://pinterest.com"
//               className="text-white"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaPinterest />
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default TopBar;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="Top-Bar text-white py-2">
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={12} xs={12} className="text-end">
            <FaEnvelope className="me-2" />
            <a
              href="mailto:www.registerkaro.in"
              className="text-white text-decoration-none"
            >
              www.registerkaro.in
            </a>
            <span className="mx-3">|</span>
            <FaPhoneAlt className="me-2" />
            <a
              href="tel:+918447746183"
              className="text-white text-decoration-none"
            >
              +91 8447746183
            </a>
            <span className="mx-3">|</span>
            <a
              href="https://instagram.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://pinterest.com"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
