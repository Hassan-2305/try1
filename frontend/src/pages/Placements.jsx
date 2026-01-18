import React from 'react';

const Placements = () => {
    return (
        <div className="container section">
            <h1 className="heading-lg">Placements</h1>
            <div className="placement-stats">
                <div className="card">
                    <h3>Latest News</h3>
                    <p>Google Hiring Drive scheduled for Jan 10th.</p>
                </div>
            </div>

            <h2 className="heading-md" style={{ marginTop: '4rem' }}>Our Recruiters</h2>
            <div className="recruiters-grid">
                {["Google", "Microsoft", "Amazon", "TCS"].map(r => (
                    <div key={r} className="card">
                        <h3>{r}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Placements;
