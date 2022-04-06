const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  questionNumber: {
    type: Number,
  },
  image: {
    type: String,
  },
  audio: {
    type: String,
  },
  paragraph: {
    type: String,
  },
  question: {
    type: String,
  },
  groupQuestion: {
    type: Number,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },
  option3: {
    type: String,
  },
  option4: {
    type: String,
  },
  correctAnswer: {
    type: String,
  },
  part: {
    type: Number,
  },
  examId: {
    type: Number,
  }
});

QuestionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Question = mongoose.model("questions", QuestionSchema);

module.exports = Question;