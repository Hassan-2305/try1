const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import Routes
const eventRoutes = require('./routes/events');
const materialRoutes = require('./routes/materials');
const placementRoutes = require('./routes/placements');
const newsletterRoutes = require('./routes/newsletter');
const teamRoutes = require('./routes/team');

// Use Routes
app.use('/api/events', eventRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/team', teamRoutes);

app.get('/', (req, res) => {
    res.send('ACES Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
