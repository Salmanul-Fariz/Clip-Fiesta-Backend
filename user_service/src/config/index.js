const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.APPLICATION_PORT,
  APP_NAME: process.env.APPLICATION_NAME,
};
