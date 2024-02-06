const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Handle other routes with history API fallback
app.use(
  history({
    rewrites: [
      { from: /^\/blog/, to: '/blog.html' }, // adjust as per your routes
      // Add more rewrites if necessary
    ],
  })
);

// Serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
