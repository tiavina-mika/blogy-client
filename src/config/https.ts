import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});