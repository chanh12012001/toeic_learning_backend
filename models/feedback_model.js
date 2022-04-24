const mongoose = require("mongoose");

const { Schema } = mongoose;

const FeedbackSchema = new Schema({
  createAt: {
      type: Date
  },
  content: {
    type: String,
  },
  state: {
      type: Boolean,
  },
  userId: {
    type: String
  },
});

FeedbackSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Feedback = mongoose.model("feedback", FeedbackSchema);

module.exports = Feedback;