const express = require('express');
const appRoot = require('app-root-path');
const app = express();
const blogRoutes = require(appRoot + '/routes/blog');
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use('/api', blogRoutes);
app.use(function(req, res) {
  res.send('404: Page not Found');
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Do graceful shutdown
const shutdown = () => {
  server.close(() => {
    console.log('closed express');
  });
};

// Handle ^C
process.on('SIGINT', shutdown);
