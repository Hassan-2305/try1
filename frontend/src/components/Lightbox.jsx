import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ isOpen, onClose, imageSrc, title, category }) => {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose}>
                    <X size={32} />
                </button>

                <img src={imageSrc} alt={title} className="lightbox-image" />

                <div className="lightbox-info">
                    <span className="lightbox-category">{category}</span>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Lightbox;
