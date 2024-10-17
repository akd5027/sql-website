const express = require('express');
const app = express();

const databaseRoutes = require('./routes/databaseRoutes');

const port = 3000;

// Register view engine
app.set('view engine', 'ejs');

// Registering routes.
app.use(databaseRoutes);

app.get('/', (req, res) => {
  res.redirect('/database');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
