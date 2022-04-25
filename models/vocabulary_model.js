const mongoose = require("mongoose");
const Example = require('../models/example_model')


const { Schema } = mongoose;

const VocabularySchema = new Schema({
  name: {
    type: String,
  },
  definition: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  phonetic: {
    type: String,
  },
  partOfSpeech: {
    type: String,
  },
  examples: {
    example: {
        type: String,
    },
    meaning: {
        type: String,
    },
  },
  audioUrl: {
    type: String,
  },
  lessonId: {
    type: Number,
  },
});

VocabularySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Vocabulary = mongoose.model("vocabularies", VocabularySchema);

module.exports = Vocabulary;