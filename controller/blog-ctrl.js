const Blog = require("../modal/blog-modal");

//get
const getBlog = (req, res) => {
  if (req.params.ID) {
    // If ID is provided, fetch a specific blog
    const blogId = req.params.ID;

    Blog.findById(blogId)
      .then((blog) => {
        if (!blog) {
          return res.status(404).json({ error: "Blog not found." });
        }

        res.json(blog);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    // If no ID is provided, fetch all blogs
    Blog.find()
      .then((blogs) => {
        res.json(blogs);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//create blog
const createBlog = (req, res) => {
  // Check if title and author are missing
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required." });
  }

  // Create new blog entry
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
  });

  // Save the blog entry
  blog
    .save()
    .then((savedBlog) => {
      res.json(savedBlog);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

//update blog
const updateBlog = (req, res) => {
  const blogID = req.params.ID;

  Blog.findByIdAndUpdate(
    blogID,
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
      },
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedBlog) => {
      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found." });
      }
      res.json(updatedBlog);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Delete blog
const deleteBlog = (req, res) => {
  Blog.findByIdAndDelete(req.params.ID)
    .then((deletedBlog) => {
      if (!deletedBlog) {
        return res.status(404).json({ error: "Blog not found." });
      }

      res.json({ message: "Blog deleted successfully." });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
};
