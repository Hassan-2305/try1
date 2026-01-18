import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('Initializing...');

    const messages = [
        'Initializing Core...',
        'Loading Modules...',
        'Establishing Uplink...',
        'Verifying Assets...',
        'System Ready.'
    ];

    useEffect(() => {
        // Progress bar animation
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Slight delay before unmounting
                    return 100;
                }
                // Randomize speed for "real" feel
                return prev + Math.random() * 10;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        // Text cycling logic based on progress thresholds
        if (progress < 20) setText(messages[0]);
        else if (progress < 40) setText(messages[1]);
        else if (progress < 70) setText(messages[2]);
        else if (progress < 90) setText(messages[3]);
        else setText(messages[4]);
    }, [progress]);

    return (
        <div className="loader-container">
            {/* Warp Tunnel Effect */}
            <div className="warp-tunnel">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="warp-star"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="loader-content">
                <h1 className="loader-logo">ACES</h1>

                <div className="loader-bar-container">
                    <div
                        className="loader-bar-fill"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>

                <div className="loader-text-row">
                    <span className="loader-percent">{Math.min(Math.floor(progress), 100)}%</span>
                    <span className="loader-message"> :: {text}</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
