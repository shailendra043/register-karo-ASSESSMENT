import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const faqs = [
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
];

const FAQ = () => {
  return (
    <div className="container py-5">
      <h5 className="text-center text-warning mb-3">FAQ</h5>
      <h2 className="text-center fw-bold mb-4">Frequent Ask Questions</h2>

      <div className="accordion" id="faqAccordion">
        {faqs.map((question, index) => (
          <div className="accordion-item mb-3 faq-box" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                {question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you can recover deleted files from your desktop using this software. It has a user-friendly interface and reliable recovery algorithms to ensure the best results.
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn show-btn">
          Show more <span className="ms-1">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
