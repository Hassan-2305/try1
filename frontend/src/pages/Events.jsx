import React, { useState, useEffect } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from API
        // fetch('http://localhost:5000/api/events').then(...)
        // For now using mock data matching backend
        const mockEvents = [
            {
                id: 1,
                title: "ACES Hackathon 2024",
                date: "2024-03-15",
                description: "Annual 24-hour hackathon.",
                image: "https://via.placeholder.com/300",
                type: "upcoming",
                link: "#register"
            },
            {
                id: 2,
                title: "Web Dev Workshop",
                date: "2023-11-20",
                description: "Introduction to React.",
                image: "https://via.placeholder.com/300",
                type: "past"
            }
        ];
        setEvents(mockEvents);
    }, []);

    return (
        <div className="container section">
            <h1 className="heading-lg">Events</h1>
            <h2 className="heading-md">Upcoming Events</h2>
            <div className="events-grid">
                {events.filter(e => e.type === 'upcoming').map(event => (
                    <div key={event.id} className="card">
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                        <a href={event.link} className="btn btn-primary">Register</a>
                    </div>
                ))}
            </div>

            <h2 className="heading-md" style={{ marginTop: '4rem' }}>Past Events</h2>
            <div className="events-grid">
                {events.filter(e => e.type === 'past').map(event => (
                    <div key={event.id} className="card">
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
