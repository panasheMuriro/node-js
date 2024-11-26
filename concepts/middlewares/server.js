const express = require('express');
const app = express();
const PORT = 3000;

// BUilt in middleware
app.use(express.json());

// Third party
// const cors = require('cors');
// app.use(cors());

// Custom Logger Middleware
const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url} - ${req.ip}`);
    next();
};

// Apply middleware globally
app.use(loggerMiddleware);

// Routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
