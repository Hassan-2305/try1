import React from 'react';

const Materials = () => {
    return (
        <div className="container section">
            <h1 className="heading-lg">Study Materials</h1>

            <div className="materials-section">
                <h2 className="heading-md">2019 Scheme</h2>
                <div className="semester-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                        <div key={sem} className="card">
                            <h3>Semester {sem}</h3>
                            <button className="btn btn-outline">View Materials</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="materials-section" style={{ marginTop: '4rem' }}>
                <h2 className="heading-md">2023 Scheme</h2>
                <div className="semester-grid">
                    {[1, 2, 3, 4].map(sem => (
                        <div key={sem} className="card">
                            <h3>Semester {sem}</h3>
                            <button className="btn btn-outline">View Materials</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Materials;
