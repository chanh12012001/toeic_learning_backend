const mongoose = require("mongoose");

const { Schema } = mongoose;

const TermsOfUseSchema = new Schema({
  content: {
    type: String,
  },
});

TermsOfUseSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const TermsOfUse = mongoose.model("terms-of-use", TermsOfUseSchema);

module.exports = TermsOfUse;