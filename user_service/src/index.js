const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8001, () => {
  console.log('User Service is listening to port 8001');
});
