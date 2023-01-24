const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.APPLICATION_PORT,
  APP_NAME: process.env.APPLICATION_NAME,
  HOST_NAME: process.env.HOST_NAME,
};
