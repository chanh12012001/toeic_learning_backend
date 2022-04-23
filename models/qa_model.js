const mongoose = require("mongoose");

const { Schema } = mongoose;

const QASchema = new Schema({
  keyword: {
    type: String,
  },
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
});

QASchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const QA = mongoose.model("qa", QASchema);

module.exports = QA;