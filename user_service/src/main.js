const express = require('express');

const { PORT, APP_NAME } = require('./config');
const databaseConnection = require('./database/connection');
const expressApp = require('./express-app');

const app = express();

async function StartServer() {
  // Connect database
  await databaseConnection();

  // Connect Application
  await expressApp(app);

  // Listening port
  app
    .listen(PORT, () => {
      console.log(`${APP_NAME} is listening to port ${PORT}`);
    })
    .on('error', (err) => {
      console.log(err);
    });
}

StartServer();
