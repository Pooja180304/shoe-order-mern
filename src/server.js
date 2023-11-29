const Express = require("express");
const Mongoclient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");

const app = Express();
app.use(cors());

const CONNECTION_STRING = "mongodb+srv://spideypooja04:Pooj@2004@cluster.mongodb.net/shoeorder";

const DATABASE_NAME = "shoeorder";
let database;

app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Error connecting to MongoDB:", error);
            return;
        }
        database = client.db(DATABASE_NAME);
        console.log("MongoDB connection successful");
    });
});
