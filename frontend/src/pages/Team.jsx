import React from 'react';

const Team = () => {
    return (
        <div className="container section">
            <h1 className="heading-lg">Our Team</h1>

            <h2 className="heading-md">Core Team</h2>
            <div className="team-grid">
                <div className="card">
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#333', marginBottom: '1rem' }}></div>
                    <h3>John Doe</h3>
                    <p>President</p>
                </div>
                <div className="card">
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#333', marginBottom: '1rem' }}></div>
                    <h3>Jane Smith</h3>
                    <p>Secretary</p>
                </div>
            </div>

            <h2 className="heading-md" style={{ marginTop: '4rem' }}>Members</h2>
            <button className="btn btn-outline">View All Members</button>
        </div>
    );
};

export default Team;
