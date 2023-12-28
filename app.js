const express = require("express");
const app = express();
const port = 8089;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/auth-routes");
const blogrouter = require("./routes/blog-routes");
//env file configuration
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(router);
app.use(blogrouter);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
