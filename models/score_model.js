const mongoose = require("mongoose");

const { Schema } = mongoose;

const ScoreSchema = new Schema({

  scoreRecord: {
      type: Number,
  },
  examId:{
    type: Number,
  },
  part:{
    type: Number,
},
  userId: {
    type: String
  },
});

ScoreSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Score = mongoose.model("score", ScoreSchema);

module.exports = Score;