const express = require('express');
const app = express();
// THIS IS THE IMPORTANT PART - The middleware
app.use(express.json()); // This allows your API to read JSON body like {tittle: "Hello World"}

const notesRoutes = require('./routes/notes');
app.use('/notes', notesRoutes);

app.get('/', (req, res) => {
    res.send('Group 4 Notes API is running...');
});

// 404 Handler - for routes that don't exist
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stacks);
    res.status(500).json({ message: "Something went wrong!"});
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;