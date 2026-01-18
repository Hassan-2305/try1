import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Newsletter.css';

const newsletters = [
  { title: 'January 2024 Edition', desc: 'Latest updates from the department.' },
  { title: 'February 2024 Edition', desc: 'Insights and announcements.' },
  { title: 'March 2024 Edition', desc: 'Events and highlights.' },
  { title: 'Special Edition', desc: 'Exclusive stories and updates.' },
  { title: 'Annual Report', desc: 'Yearly overview and achievements.' },
  { title: 'Tech Digest', desc: 'Technology and innovation news.' },
];

const Newsletter = () => {
  const navigate = useNavigate();

  return (
    <div className="container section">
      <h1 className="heading-lg">Newsletter</h1>

      <div className="newsletter-grid">
        {newsletters.map((item, index) => (
          <div
            key={index}
            className="newsletter-card"
            onClick={() => navigate('/newsletter/jan-2024')}
          >
            <div className="card-glow" />

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="read-btn" type="button">
              Read Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
