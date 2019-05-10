import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
};
