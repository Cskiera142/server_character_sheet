const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3500;

// Middleware //
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Routes //
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
