const mongoose = require('mongoose');

const { MONGODB_URL, APP_NAME } = require('../config');

module.exports = async () => {
  try {
    // DeprecationWarning: Mongoose: the `strictQuery` :- to suppress this warning.
    mongoose.set('strictQuery', true);

    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`${APP_NAME} Database Connected`);
  } catch (err) {
    console.log('======== Database Connection Error ========');
    console.log(err);
  }
};
