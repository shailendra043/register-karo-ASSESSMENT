import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat",
    author: "Chris",
    position: "President and CEO, PrintReach, USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 4.5
  },
  {
    id: 2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat",
    author: "Sarah",
    position: "CTO, TechFlow, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5
  },
  {
    id: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat",
    author: "Michael",
    position: "Director, InnovateCorp, Canada",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 4.5
  }
];

const RatingStars = ({ rating }: { rating : number }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={20}
          fill={star <= rating ? "#ffd700" : "none"}
          color={star <= rating ? "#ffd700" : "#ddd"}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="text-white text-center mb-5">What people say about us</h2>
        
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="testimonial-card">
                  <RatingStars rating={testimonial.rating} />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h5>{testimonial.author}</h5>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;