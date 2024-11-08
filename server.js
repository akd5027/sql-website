const express = require('express');
const morgan = require('morgan');
const app = express();

const databaseController = require('./controllers/databaseController');
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

app.get('/', (req, res) => {    // when home url (localhost:3000) + "/" is used. the user is redirected
  res.redirect('/database');
});

databaseController.createDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(err => console.error("Could not create database:", err));
