const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdminSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

AdminSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    //do not reveal passwordHash
    delete returnedObject.password;
  },
});

const Admin = mongoose.model("admins", AdminSchema);

module.exports = Admin;