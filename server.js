const express = require('express');
const morgan = require('morgan');
const app = express();

const databaseRoutes = require('./routes/databaseRoutes');

const port = 3000;

// Register view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));

// Registering routes.
app.use('/database', databaseRoutes);

app.get('/', (req, res) => {
  res.redirect('/database');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
