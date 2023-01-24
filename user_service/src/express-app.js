const express = require('express');
const cors = require('cors');

// User Service
const userRouter = require('./api/userRouter');

module.exports = async (app) => {
  // Body parser, reading data from body into req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // It relax the security to API ( allow to connect with front end )
  app.use(cors());

  // User Service API's
  app.use('/', userRouter);
};
