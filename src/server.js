import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoute(app);

connectDB()

let port = process.env.PORT || 6969;
//port === undifine => port = 6969
app.listen(port, () => {
    console.log("Backend NodeJs is running on the port :" + port);
})