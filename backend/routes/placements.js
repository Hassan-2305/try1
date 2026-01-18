const express = require('express');
const router = express.Router();

// Mock Data
const data = {
    news: [
        { id: 1, title: "Google Hiring Drive", date: "2024-01-10" }
    ],
    recruiters: ["Google", "Microsoft", "Amazon", "TCS"]
};

router.get('/', (req, res) => {
    res.json(data);
});

module.exports = router;
