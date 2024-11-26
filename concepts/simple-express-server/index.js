const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the simple Express server!');
});


app.get('/api', (req, res) => {
    res.json({ message: 'Hello, API!' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
