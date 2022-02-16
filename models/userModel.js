const mongoose = require('mongoose');
const {Schema} = mongoose;
const User = new Schema({
  firsName: {type: String},
  lastName: {type: String},
  userName: {type: String},
  password: {type: String},
  email: {type: String},
  address: {type: String},
  phone: {type: String},
});
module.exports = mongoose.model('User', User);
