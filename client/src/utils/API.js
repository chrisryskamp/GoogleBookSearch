import axios from "axios";

export default {
  // All books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // ID
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  
  // Save
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
