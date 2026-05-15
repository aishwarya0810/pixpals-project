/*//const dotenv = require('dotenv');
const dotenv = require('dotenv');
dotenv.config();
const { mongoose } = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

//const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

require('dotenv').config();

const DB = process.env.DB_URL;

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((error) => console.log('Error connecting to the database'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port = ${port}`);
});*/

const dotenv = require('dotenv');
dotenv.config(); // only once

const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DB_URL;

mongoose
  .connect(DB)
  .then(() => {
    console.log('✅ DB connection successful');
  })
  .catch((error) => {
    console.log('❌ DB ERROR:', error.message);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server is running at port = ${port}`);
});

