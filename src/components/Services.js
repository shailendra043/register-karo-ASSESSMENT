// Import necessary modules
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import company from '../assets/company.png';
import service from '../assets/service.png';
import virtual from '../assets/virtual.png';
import annual from '../assets/annual.png';
import payroll from '../assets/payroll.png';
import book from '../assets/book.png';

// Service data with imported images
const services = [
  {
    title: 'Company Formation',
    description: 'Build web-based solutions that enhance customer experience.',
    image: company,
  },
  {
    title: 'Company Secretarial Services',
    description: 'Make data-driven decisions and utilize technology to reach business goals.',
    image: service,
  },
  {
    title: 'Virtual Office Address',
    description: 'Foster customer relationships by effectively serving your market.',
    image: virtual,
  },
  {
    title: 'Annual Compliance Services',
    description: 'Turn your ideas into modern products with our design experts.',
    image: annual,
  },
  {
    title: 'Payroll Services',
    description: 'Expand your business across the globe with minimal effort.',
    image: payroll,
  },
  {
    title: 'Bookkeeping Services',
    description: 'Steering user behaviours with creative design, data insights & technology.',
    image: book,
  },
];

// ServiceCard component with image centered and UI as per provided design
const ServiceCard = ({ title, description, image }) => (
  <div className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
    <div className="card text-center shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="mb-3">
          <img src={image} alt={title} className="img-fluid mb-3" style={{ height: '80px' }} />
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <a href="#">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

// ServicesSection component
const ServicesSection = () => (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h6 className="text-uppercase text-warning">Welcome to Registerkaro.in</h6>
      <h2 className="fw-bold">Explore Our Services</h2>
    </div>
    <div className="row">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
    <div className="text-center mt-4">
      <button className="btn btn-primary px-4 py-2">See All Services</button>
    </div>
  </div>
);

export default ServicesSection;
