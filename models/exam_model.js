const mongoose = require("mongoose");

const { Schema } = mongoose;

const ExamSchema = new Schema({
  exam: {
      type: Number
  }
});

ExamSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Exam = mongoose.model("exams", ExamSchema);

module.exports = Exam;