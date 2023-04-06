import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Find Balance and Renewal Within</h1>
                <p className="hero-subtitle">Nurturing Growth and Well-being Through Personalized Therapy </p>
                <div className="hero-cta">
                    <a href="/appointments" className="hero-btn">Book an Appointment</a>
                    <a href="/about" className="hero-btn">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
