const mongoose = require("mongoose");

const { Schema } = mongoose;

const VocabularyFavouriteSchema = new Schema({
  vocabularyId: {
    type: String,
  },
  userId: {
    type: String,
  },
  saveAt: {
      type: Date,
  },
  vocabulary: {
    type: Object,
  }
});

VocabularyFavouriteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const VocabularyFavourite = mongoose.model("vocabulary-favourite", VocabularyFavouriteSchema);

module.exports = VocabularyFavourite;