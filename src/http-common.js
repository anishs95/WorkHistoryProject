import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7072/api",
  headers: {
    "Content-type": "application/json",
  },
});
