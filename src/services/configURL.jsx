import axios from "axios";

const BASE_URL = "https://62db6ca0d1d97b9e0c4f3334.mockapi.io";

const TOKEN = "";

// export const MANHOM = "GP02";

export let https = axios.create({
  baseURL: BASE_URL,
  headers: {},
});
