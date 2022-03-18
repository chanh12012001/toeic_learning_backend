const mongoose = require("mongoose");

const { Schema } = mongoose;

const LectureTypeSchema = new Schema({
  name: {
    type: String,
  },
});

LectureTypeSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    //do not reveal passwordHash
    delete returnedObject.password;
  },
});

const LectureType = mongoose.model("lecture_type", LectureTypeSchema);

module.exports = LectureType;