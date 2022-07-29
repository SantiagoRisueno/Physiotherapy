const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const config = require("config");
const path = require("path");

// require('dotenv/config');
const assignamentRoute = require("./routes/assignament");
const blogRoute = require("./routes/blog");
const historyRoute = require("./routes/history");
const messageRoute = require("./routes/message");
const usersRoute = require("./routes/users");

// Config
const serverHost = config.get("server.host");
const serverPort = config.get("server.port");
const dbConnection = config.get("server.dbConnection");
const clientHost = config.get("client.host");
const clientPort = config.get("client.port");


// Connect to DB
// mongoose.connect(process.env.DB_CONNECTION_ALPHA);
// console.log(config.get('Customer.dbConfig.connection'))

mongoose.connect(dbConnection);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
var cors = require("cors");
app.use(
  cors({
    origin:
      `http://${clientHost}:${clientPort}`,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,PATCH,OPTIONS");
//     if (req.method == "OPTIONS") {
//       return res.sendStatus(200);
//     }
//     next();
// });

//Routes
app.use("/azur/assignament", assignamentRoute);
app.use("/azur/users", usersRoute);
app.use("/azur/history", historyRoute);
app.use("/azur/blog", blogRoute);
app.use("/azur/message", messageRoute);

app.get('/', (req,res) =>{
    res.send("Welcome to AZUR-API");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// How to start listening to the server
app.listen(serverPort, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(
        `Server started at http://${serverHost}:${serverPort}`
    );
});
