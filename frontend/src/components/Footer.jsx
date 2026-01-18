import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>ACES CUSAT</h3>
                    <p>Association of Computer Science and Engineering Students</p>
                    <p className="tagline">&lt;/code&gt; connect &bull; create</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        {/* Add links properly if needed or reuse component logic */}
                        <li><a href="/events">Events</a></li>
                        <li><a href="/materials">Materials</a></li>
                        <li><a href="/team">Team</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="#"><Github size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ACES CUSAT. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
