const express = require('express');
const router = express.Router();

// Mock Data
const team = {
    core: [
        { id: 1, name: "John Doe", role: "President", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Jane Smith", role: "Secretary", image: "https://via.placeholder.com/150" }
    ],
    nonCore: [
        { id: 3, name: "Alice", role: "Design Team" },
        { id: 4, name: "Bob", role: "Tech Team" }
    ]
};

router.get('/', (req, res) => {
    res.json(team);
});

module.exports = router;
