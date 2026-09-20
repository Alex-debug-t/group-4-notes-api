const express = require('express');
const app = express();
// THIS IS THE IMPORTANT PART - The middleware
app.use(express.json()); // This allows your API to read JSON body like {tittle: "Hello World"}

app.get('/', (req, res) => {
    res.send('Group 4 Notes API is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;