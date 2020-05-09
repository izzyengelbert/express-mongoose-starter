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
    let connectionUrl = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${name}`;
    if (dbUrl !== '') {
      connectionUrl = dbUrl;
    }
    Mongoose.connect(connectionUrl, { useNewUrlParser: true });
    mongoose = Mongoose.connection;
  }

  return mongoose;
};

const disconnect = () => mongoose.close();

module.exports = {
  connect,
  disconnect
};
