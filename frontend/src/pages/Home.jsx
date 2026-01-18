import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, Users, BookOpen, Code, Terminal, Cpu, Database, Globe, Github, Atom, Server, Workflow, FileCode } from "lucide-react";
import { Link } from "react-router-dom";
import GradientBlinds from "../components/GradientBlinds";
import Lightbox from "../components/Lightbox";
import "./Home.css";

const GRADIENT_COLORS = ["#22d3ee", "#4c1d95"];

const GALLERY_ITEMS = [
  { src: "/images/gallery1.png", title: "Community Meetup", category: "Event" },
  { src: "/images/gallery2.png", title: "Web Dev Workshop", category: "Workshop" },
  { src: "/images/gallery3.png", title: "Hackathon 2024", category: "Competition" },
  { src: "/images/gallery4.png", title: "Tech Talk: AI", category: "Seminar" },
  { src: "/images/gallery5.png", title: "Project Showcase", category: "Exhibition" },
];

const words = ["Create.", "Innovate.", "Build.", "Lead."]; // Moved outside to prevent re-creation

const Home = () => {
  const [text, setText] = useState("Create");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [selectedImage, setSelectedImage] = useState(null);

  // Stable heatmap data prevents flickering on re-renders
  const [contributionLevels] = useState(() =>
    Array.from({ length: 52 }, () =>
      Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : Math.random() > 0.2 ? 1 : 0
    )
  );

  /* =====================
     GSAP HORIZONTAL SCROLL
     (Note: Logic seems unused or handled via CSS in this version, keeping comment structure)
  ===================== */

  /* =====================
     TYPEWRITER EFFECT
  ===================== */
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  /* =====================
     SCROLL REVEAL + COUNTERS
  ===================== */
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // Start counters when stats appear
            if (entry.target.classList.contains("stat-card")) {
              const el = entry.target.querySelector("h3");
              if (el && !el.dataset.started) {
                el.dataset.started = "true";
                const target = Number(el.dataset.count);
                let count = 0;

                const update = () => {
                  count += Math.ceil(target / 60);
                  if (count >= target) {
                    el.textContent = `${target}+`;
                  } else {
                    el.textContent = count;
                    requestAnimationFrame(update);
                  }
                };

                update();
              }
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* =====================
     SPOTLIGHT EFFECT ON CARDS
  ===================== */
  useEffect(() => {
    const cards = document.querySelectorAll(".what-card, .mission-card");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    };

    cards.forEach(card => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <div className="home-page">

      {/* =====================
          HERO SECTION
      ===================== */}
      {/* =====================
          HERO SECTION
      ===================== */}
      <section className="hero-section">
        <div className="hero-flex-layout">
          {/* Item 1: Gradient Blinds (Background on Desktop, Top Block on Mobile) */}
          <div className="hero-bg">
            <GradientBlinds
              gradientColors={GRADIENT_COLORS}
              angle={15}
              noise={0.25}
              blindCount={14}
              blindMinWidth={60}
              spotlightRadius={0.45}
              spotlightSoftness={1.2}
              spotlightOpacity={1}
              mouseDampening={0.18}
              shineDirection="left"
              mixBlendMode="screen"
            />
          </div>

          {/* Item 2: Hero Text */}
          <div className="container hero-content reveal">
            <h1 className="hero-title">
              Code. Connect. <span className="highlight typewriter">{text}</span>
              <span className="cursor">|</span>
            </h1>

            <p className="hero-subtitle">
              Association of Computer Science and Engineering Students at CUSAT.
            </p>

            <div className="hero-cta">
              <Link to="/events" className="btn btn-primary">
                Explore Events <ArrowRight size={18} />
              </Link>
              <Link to="/team" className="btn btn-outline">
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Item 3: Tech Stack Marquee */}
          <div className="tech-marquee-container">
            <div className="tech-divider tech-divider-top"></div>
            <div className="tech-marquee-track">
              {[...Array(4)].map((_, i) => (
                <div className="marquee-group" key={i}>
                  <span className="tech-item"><Github size={20} /> GITHUB</span>
                  <span className="tech-item"><FileCode size={20} /> JAVASCRIPT</span>
                  <span className="tech-item"><Atom size={20} /> REACT</span>
                  <span className="tech-item"><Code size={20} /> PYTHON</span>
                  <span className="tech-item"><Server size={20} /> LINUX</span>
                  <span className="tech-item"><Workflow size={20} /> DEVOPS</span>
                  <span className="tech-item"><Cpu size={20} /> AI / ML</span>
                  <span className="tech-item"><Terminal size={20} /> CYBERSEC</span>
                  <span className="tech-item"><Database size={20} /> CLOUD</span>
                  <span className="tech-item"><Globe size={20} /> OPEN SOURCE</span>
                </div>
              ))}
            </div>
            <div className="tech-divider tech-divider-bottom"></div>
          </div>
        </div>
      </section>

      {/* =====================
          ABOUT SECTION
      ===================== */}
      <section className="about-section reveal">
        <div className="container about-wrapper">

          <div className="about-text">
            <h2>About <span>ACES</span></h2>
            <p>
              ACES is a student-driven technical community at CUSAT focused on
              innovation, collaboration, and industry-ready skills.
            </p>
            <p>
              We don’t just conduct events — we build engineers, leaders,
              and problem-solvers through real-world exposure.
            </p>
          </div>

          <div className="activity-map-container">
            <div className="activity-header">
              <h3>Legacy of <span>Consistency</span></h3>
              <p>Contributions & Events over the last year</p>
            </div>
            <div className="activity-grid">
              {/* Generating a visual 'contribution graph' */}
              {/* Generating a visual 'contribution graph' */}
              {contributionLevels.map((level, i) => (
                <div
                  key={i}
                  className="activity-cell"
                  data-level={level}
                  style={{ animationDelay: `${i * 0.02}s` }}
                />
              ))}
            </div>
            <div className="activity-legend">
              <span>Less</span>
              <div className="legend-scale">
                <div data-level="0"></div>
                <div data-level="1"></div>
                <div data-level="2"></div>
                <div data-level="3"></div>
              </div>
              <span>More</span>
            </div>
          </div>

        </div>
      </section>

      {/* =====================
          WHAT WE DO
      ===================== */}
      {/* =====================
          WHAT WE DO
      ===================== */}
      <section className="what-we-do-section reveal">
        <div className="container">
          <h2 className="section-title">
            What We <span>Do</span>
          </h2>

          <div className="what-grid reveal reveal-stagger">
            <div className="what-card">
              <span className="card-index">01</span>
              <BookOpen size={40} strokeWidth={1.5} />
              <div className="card-content">
                <h3>Workshops</h3>
                <p>Hands-on learning experiences.</p>
              </div>
            </div>

            <div className="what-card">
              <span className="card-index">02</span>
              <Calendar size={40} strokeWidth={1.5} />
              <div className="card-content">
                <h3>Hackathons</h3>
                <p>Innovation-driven competitions.</p>
              </div>
            </div>

            <div className="what-card">
              <span className="card-index">03</span>
              <Users size={40} strokeWidth={1.5} />
              <div className="card-content">
                <h3>Tech Talks</h3>
                <p>Industry and alumni insights.</p>
              </div>
            </div>

            <div className="what-card">
              <span className="card-index">04</span>
              <ArrowRight size={40} strokeWidth={1.5} />
              <div className="card-content">
                <h3>Projects</h3>
                <p>Collaborative real-world builds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          GALLERY SECTION
      ===================== */}
      <section className="gallery-section reveal">
        <div className="container">
          <h2 className="section-title">
            Life at <span>ACES</span>
          </h2>
          <div className="marquee-wrapper">
            {/* Row 1 - Scroll Left */}
            <div className="marquee-track scroll-left">
              {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, i) => (
                <div
                  className="marquee-content-item"
                  key={i}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="marquee-card">
                    <img src={item.src} alt={item.title} />
                    <div className="caption-overlay">
                      <span className="caption-category">{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - Scroll Right */}
            <div className="marquee-track scroll-right">
              {[...GALLERY_ITEMS, ...GALLERY_ITEMS].slice().reverse().map((item, i) => (
                <div
                  className="marquee-content-item"
                  key={i}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="marquee-card">
                    <img src={item.src} alt={item.title} />
                    <div className="caption-overlay">
                      <span className="caption-category">{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          LIGHTBOX
      ===================== */}
      <Lightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src}
        title={selectedImage?.title}
        category={selectedImage?.category}
      />

      {/* =====================
          STORY SECTION (TIMELINE)
      ===================== */}
      {/* =====================
          MISSION SECTION
      ===================== */}
      <section className="mission-section reveal">
        <div className="container">
          <h2 className="section-title text-center">
            Our <span>Mission</span>
          </h2>
          <div className="mission-grid reveal reveal-stagger">
            <div className="mission-card">
              <div className="mission-bg-icon">
                <Users size={140} strokeWidth={0.5} />
              </div>
              <div className="mission-content">
                <h3>Community</h3>
                <p>Building a supportive network where every student belongs.</p>
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-bg-icon">
                <Globe size={140} strokeWidth={0.5} />
              </div>
              <div className="mission-content">
                <h3>Collaborate</h3>
                <p>Teamwork to solve real-world problems and create impact.</p>
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-bg-icon">
                <Atom size={140} strokeWidth={0.5} />
              </div>
              <div className="mission-content">
                <h3>Innovation</h3>
                <p>Pushing boundaries with cutting-edge experimentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
