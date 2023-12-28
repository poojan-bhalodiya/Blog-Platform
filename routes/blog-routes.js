const blogrouter = require("express").Router();
const {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog-ctrl");
blogrouter.get("/blogs", getBlog);
//blog
blogrouter.get("/blog/:ID", getBlog);
//create blog
blogrouter.post("/blog", createBlog);
//update blog
blogrouter.put("/blog/:ID", updateBlog);
// Delete a blog
blogrouter.delete("/blog/:ID", deleteBlog); 




module.exports = blogrouter;
