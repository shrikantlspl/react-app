const express = require('express');
const history = require('express-history-api-fallback');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Handle other routes with history API fallback
app.use(history());

// Serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
