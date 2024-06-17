const express = require("express");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");


//importing .env and configuration
require("dotenv").config();

//connect to db
connectDB();

//expess app
const app = express();

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Vijayananad</h1>");
});

//middlewares
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("dev"));




//routes

app.use("/api/v1/vehicles", require("./routes/vehicleRoutes"));


//port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`.black.bgGreen);
});
