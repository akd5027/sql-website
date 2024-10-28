const express = require('express');
const morgan = require('morgan');
const app = express();

const databaseRoutes = require('./routes/databaseRoutes');

const port = 3000;

// Register view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// Registering routes.
app.use('/database', databaseRoutes);

app.get('/', (req, res) => {
  res.redirect('/database');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
