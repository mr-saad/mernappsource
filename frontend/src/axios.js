import axios from "axios";

const config = axios.create({
  baseURL: "http://localhost:8888",
});

export default config;
