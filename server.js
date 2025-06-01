const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'index')));

// Serve static files from the index directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index', 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
