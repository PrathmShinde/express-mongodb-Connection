
// express + MongoDb connecton 

import express from "express";
import mongoose, { mongo } from "mongoose";

const PORT = 5000;
const app = express();

//database connection(express + mongodb)
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "Marvellous",
  })
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Not connected"))

  //Creating db Schema
  const messageSchema = new mongoose.Schema({
    name : String,
    email: String,
  });

  //create model (Calling/Create a collection)
const Messag = mongoose.model("customers",messageSchema);


app.listen(PORT, () => {
    console.log("Server is Working");
  });

app.get("/",(req,res) => {
    res.send("Server started sucessfully..");
})

app.get("/add", (req, res) => {
  
    Messag.create({name : "Prathm", email : "prathmShinde@gmail.com"}).then(() => {
        res.send("Nice");
    })

});
