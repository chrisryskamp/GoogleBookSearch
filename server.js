const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

var Books = require("./Model.js");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongoose connection 

const mongoose = require("mongoose");
const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/googlebooks"
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

  

  // Save a new example 
Books.create(data)
.then(function(dbBooks) {
  // Print new example 
  console.log(dbBooks);
})
.catch(function(err) {

  console.log(err.message);
});



// Define API routes 
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/src/pages/books.js"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
