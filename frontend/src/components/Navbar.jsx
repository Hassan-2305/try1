import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Terminal, BookOpen, Briefcase, Mail, Users } from 'lucide-react';
import acesLogo from '../assets/aces.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const hero = document.querySelector(".hero-section");
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setOnHero(entry.isIntersecting),
            { threshold: 0.6 }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);


    const toggleMenu = () => setIsOpen(!isOpen);
    const [onHero, setOnHero] = useState(true);


    const navLinks = [
        { name: 'Home', path: '/', icon: <Terminal size={18} /> },
        { name: 'Events', path: '/events', icon: <Code size={18} /> },
        { name: 'Materials', path: '/materials', icon: <BookOpen size={18} /> },
        { name: 'Placements', path: '/placements', icon: <Briefcase size={18} /> },
        { name: 'Newsletter', path: '/newsletter', icon: <Mail size={18} /> },
        { name: 'Team', path: '/team', icon: <Users size={18} /> },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${onHero ? 'on-hero' : ''}`}>

            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img
                        src={acesLogo}
                        alt="ACES CUSAT Logo"
                        className="logo-img"
                    />
                </Link>


                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {/* Optional: Add a stylized "Contact Us" button or similar if needed separately */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
