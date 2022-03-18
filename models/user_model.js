const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  phoneNumber: {
    type: String,
  },
  name: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  sex: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    //do not reveal passwordHash
    delete returnedObject.password;
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;