import { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    max: [20, 'Username too long!'],
    min: [12, 'Username too short!']
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    max: [12, 'Phone number too long!'],
    min: [10, 'Phone number too short!']
  },
  updated: {
    type: Date,
    default: Date.now()
  }
});

class User {
  static init(db) {
    return db.model('User', UserSchema);
  }

  static findUserByCredentials(username, hashedPassword) {
    return this.findOne({ username, password: hashedPassword });
  }

  static findUserById(id) {
    return this.findOne({ _id: id });
  }

  static findUserByUsername(username) {
    return this.findOne({ username });
  }
}

export default User;
