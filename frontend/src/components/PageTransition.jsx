import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const nodeRef = useRef(null);

    // Trigger animation on mount (or key change)
    return (
        <div key={location.pathname} className="page-transition">
            {children}
        </div>
    );
};

export default PageTransition;
