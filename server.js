const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');
const htmlRoutes = require('./routes/htmlRoute');
const apiRoutes = require('./routes/apiRoute');

app.use(express.static('public'));
app.use(express.urlencoded ({ extended: true }));
app.use(express.json);
app.use(logger('dev'));
app.use(require('./routes/apiRoute'));
app.use(require('./routes/htmlRoute'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})