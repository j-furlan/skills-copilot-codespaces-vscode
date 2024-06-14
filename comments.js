// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a GET route that returns a list of comments
app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'John', body: 'Hello, world!' },
    { id: 2, author: 'Jane', body: 'Hi there!' },
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});