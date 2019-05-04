// Require mongoose
var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var BooksSchema = new Schema({
  

  title: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  authors: {
    type: Array,
    trim: true,
    required: "String is Required"
  },

  description: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  image: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  link: {
    type: String,
    trim: true,
    required: "String is Required"
  }
});


var Books = mongoose.model("Books", BooksSchema);

// Export example model
module.exports = Books;