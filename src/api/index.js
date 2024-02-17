import axios from "axios";

export const prefix = "/api/users";
export const baseurl = "http://localhost:5000";
export const url = baseurl + prefix;
const API_INSTANCE = axios.create({ baseURL: url });

export default API_INSTANCE;