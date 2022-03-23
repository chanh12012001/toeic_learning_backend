const mongoose = require("mongoose");

const { Schema } = mongoose;

const VideoInfoSchema = new Schema({
  title: {
    type: String,
  },
  time: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  topicId: {
    type: String,
  },
});

VideoInfoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const VideoInfo = mongoose.model("videos", VideoInfoSchema);

module.exports = VideoInfo;