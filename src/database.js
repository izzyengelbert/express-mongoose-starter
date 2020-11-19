/* eslint-disable max-lines-per-function */

import Mongoose from 'mongoose';

let mongoose = null;

const connect = (options) => {
  const {
    dbUrl,
    dbHost,
    dbPort,
    name,
    username,
    password
  } = options;
  if (!mongoose) {
    let connectionUrl = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${name}?authSource=admin`;
    if (dbUrl && dbUrl !== '') {
      connectionUrl = dbUrl;
    }
    Mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose = Mongoose.connection;
    Mongoose.set('debug', true);
  }

  return mongoose;
};

const disconnect = () => mongoose.close();

module.exports = {
  connect,
  disconnect
};
