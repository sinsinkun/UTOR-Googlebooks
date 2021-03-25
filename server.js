const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// express middleware for handling API calls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// express middleware for displaying built react app
app.use( express.static('./client/build') );

// connect to route file for API handling
require('./router.js')(app);

// display all pages from react
app.get('*', (req, res) => {
  console.log("[HTML GET]: Get React app");
  res.sendFile('./client/build/index.html', {root:"."});
});

// open server
app.listen(PORT, function() {
  console.log( `Server online at http://localhost:${PORT}` )
})