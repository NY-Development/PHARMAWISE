import axios from "axios";
import { FDA_CONFIG } from "../config/fda";

export const http = axios.create({
  timeout: FDA_CONFIG.timeout,
  headers: {
    "Content-Type": "application/json"
  }
});
