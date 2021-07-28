require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Conneced to mongoose');
  })
  .catch((err) => console.error(err.message));

//routes
// const productServiceRoutes = require('./server/routes/productServiceRoutes');
// app.use('/', productServiceRoutes);

app.listen(PORT, console.log(`back end online on port ${PORT}`));
