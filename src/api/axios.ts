import axios from "axios";

const baseURL = "http://localhost:3010";

export default axios.create({
  baseURL,
});