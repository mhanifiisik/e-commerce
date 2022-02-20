import axios from "axios";
const BASE_URL = "http://localhost:8080/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDUwOGQ0MTNjOWIxMTcyMTRkZDY3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTE4NTc3MCwiZXhwIjoxNjQ1NDQ0OTcwfQ.GPXXYdqpXe4fyH0-msCZfwoFuriySPFr-KCZnrE3PBM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${token}` },
});
