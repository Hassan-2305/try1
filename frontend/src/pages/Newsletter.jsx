import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Newsletter.css';

const newsletters = [
  { slug: 'jan-2024', title: 'January 2024 Edition', desc: 'Latest updates from the department.' },
  { slug: 'feb-2024', title: 'February 2024 Edition', desc: 'Insights and announcements.' },
  { slug: 'mar-2024', title: 'March 2024 Edition', desc: 'Events and highlights.' },
  { slug: 'special', title: 'Special Edition', desc: 'Exclusive stories and updates.' },
  { slug: 'annual', title: 'Annual Report', desc: 'Yearly overview and achievements.' },
  { slug: 'tech', title: 'Tech Digest', desc: 'Technology and innovation news.' },
];

const Newsletter = () => {
  const navigate = useNavigate();

  return (
    <section className="newsletter-page">
      <div className="newsletter-wrapper">
        <h1 className="heading-lg newsletter-title">Newsletter</h1>

        <div className="newsletter-grid">
          {newsletters.map((item) => (
            <article
              key={item.slug}
              className="newsletter-card"
              onClick={() => navigate(`/newsletter/${item.slug}`)}
            >
              <div className="card-glow" />

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <span className="read-btn">Read Now →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
