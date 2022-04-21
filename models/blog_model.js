const mongoose = require("mongoose");

const { Schema } = mongoose;

const BlogSchema = new Schema({
    createdAt: {
        type: Date
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    images: {
        type: Array,
    }
});

BlogSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = Blog;