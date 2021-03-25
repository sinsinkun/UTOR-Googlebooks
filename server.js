const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// express middleware for handling API calls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// express middleware for displaying built react app
app.use( express.static('../react101/build') );

// display all pages from react
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react101/build/index.html'));
});

// open server
app.listen(PORT, function() {
  console.log( `Server online at http://localhost:${PORT}` )
})