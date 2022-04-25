const mongoose = require("mongoose");

const { Schema } = mongoose;

const ExampleSchema = new Schema({
    example: {
        type: String
    },
    meaning: {
        type: String
    }
});

ExampleSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Example = mongoose.model("example", ExampleSchema);

module.exports = Example;