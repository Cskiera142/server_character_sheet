const express = require("express");

const app = express();
const PORT = process.env.PORT || 3500;

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
