const mongoose = require("mongoose");

const { Schema } = mongoose;

const ImageBlogSchema = new Schema({
    imageUrl: {
        type: String,
    },
    cloudinaryId: {
        type: String,
    },
});

ImageBlogSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Image = mongoose.model("image-blogs", ImageBlogSchema);

module.exports = Image;