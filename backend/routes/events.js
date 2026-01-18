const express = require('express');
const router = express.Router();

// Mock Data
const events = [
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

router.get('/', (req, res) => {
    res.json(events);
});

module.exports = router;
