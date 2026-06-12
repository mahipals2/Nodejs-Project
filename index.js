import express from 'express';

const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('Hello this is my first node js application');
});

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        message: 'Application is running successfully'
    });
});

// Start Server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});