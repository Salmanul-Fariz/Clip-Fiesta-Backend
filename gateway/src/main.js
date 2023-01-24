const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const { APP_NAME, HOST_NAME, PORT } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', proxy(`${HOST_NAME}:8001`));

app.listen(8000, () => {
  console.log(`${APP_NAME} is listening to port ${PORT}`);
});
