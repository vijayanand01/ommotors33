const express = require("express");
const colors = require("colors");
//expess app
const app = express();

//port listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`.black.bgGreen);
});
