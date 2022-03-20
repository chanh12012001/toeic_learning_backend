const mongoose = require("mongoose");

const { Schema } = mongoose;

const TopicSchema = new Schema({
  name: {
    type: String,
  },
  lectureTypeId: {
    type: String,
  },
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  }
});

// TopicSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//     //do not reveal passwordHash
//     delete returnedObject.password;
//   },
// });

const Topic = mongoose.model("topics", TopicSchema);

module.exports = Topic;