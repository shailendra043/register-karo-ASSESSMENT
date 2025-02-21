// BlogGrid.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import trans1 from "../assets/trans1.png";
import trans2 from "../assets/trans2.png";
import trans3 from "../assets/trans3.png";
import trans4 from "../assets/trans4.png";
import trans5 from "../assets/trans5.png";

const BlogCard = ({ image, author, date, title, description, tags }) => (
  <div className="col-md-4 col-sm-6 mb-4">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h6 className="text-muted mb-2">{author} • {date}</h6>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-light text-primary me-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BlogGrid = () => {
  const blogs = [
    {
      image: trans1,
      author: 'Prabhash Mishra',
      date: '1 Jan 2023',
      title: 'Small business & Startup',
      description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
      tags: ['Tax & Audit', 'Management'],
    },
    {
      image: trans2,
      author: 'Mahesh Kumar',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'Mental models are simple expressions of complex processes or relationships.',
      tags: ['Tax', 'Research', 'Compliance'],
    },
    {
      image: trans1,
      author: 'Rakhi Verma',
      date: '1 Jan 2023',
      title: 'Growing Business Package',
      description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
      tags: ['Audit', 'Money Back'],
    },
    {
      image: trans3,
      author: 'Karan Kumar',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'Collaboration can make our teams stronger, and our individual designs better.',
      tags: ['Money', 'Management'],
    },
    {
      image: trans4,
      author: 'Richa Singh',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
      tags: ['Tax Return', 'News', 'Audit'],
    },
    {
      image: trans5,
      author: 'Miss Nora',
      date: '1 Jan 2023',
      title: 'Scale-Up Company Offer',
      description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
      tags: ['Private Limited Company', 'Customer Success'],
    },
  ];

  return (
    <div className="container py-5">
      <h6 className='text-center text-warning'> EXPLORE OUR BLOG</h6>
      <h2 className="text-center mb-4">Accelerate Digital Transformation</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn show-btn">Show more blogs →</button>
      </div>
    </div>
  );
};

export default BlogGrid;
