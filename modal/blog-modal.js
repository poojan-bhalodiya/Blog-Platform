const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  blog_id: {
    type: mongoose.Schema.Types.ObjectId,
    //default: mongoose.Types.ObjectId, // This sets it to a new ObjectId by default
  },

  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports = mongoose.model("Blog", BlogSchema);
