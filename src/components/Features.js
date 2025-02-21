// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import oracle from "../assets/oracle.png";
// import morrp from "../assets/morrp.png";
// import sams from "../assets/sams.png";
// import mon from "../assets/mon.png";
// import segment from "../assets/segment.png";

// const TrustedBySection = () => {
//   return (
//     <div className="container text-center my-5 gap-4">
//       <h2 className="mb-4">Trusted By Over 100+ Startups and Freelance Business</h2>
//       <div className="row justify-content-center">
//         <div className="col-6 col-sm-4 col-md-2 mb-3">
//           <img
//             src={oracle}
//             alt="Oracle"
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-6 col-sm-4 col-md-2 mb-3">
//           <img
//             src={morrp}
//             alt="Morpheus"
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-6 col-sm-4 col-md-2 mb-3">
//           <img
//             src={sams}
//             alt="Samsung"
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-6 col-sm-4 col-md-2 mb-3">
//           <img
//             src={mon}
//             alt="Monday.com"
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-6 col-sm-4 col-md-2 mb-3">
//           <img
//             src={segment}
//             alt="Segment"
//             className="img-fluid"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrustedBySection;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import oracle from "../assets/oracle.png";
import morrp from "../assets/morrp.png";
import sams from "../assets/sams.png";
import mon from "../assets/mon.png";
import segment from "../assets/segment.png";

const TrustedBySection = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h2>
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src={oracle} alt="Oracle" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src={morrp} alt="Morpheus" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src={sams} alt="Samsung" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src={mon} alt="Monday.com" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src={segment} alt="Segment" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
