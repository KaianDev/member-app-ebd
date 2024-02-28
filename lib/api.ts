import axios from "axios";

export const frontendAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FRONTEND,
  headers: {
    "Content-Type": "application/json",
  },
});

export const backendAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  headers: {
    "Content-Type": "application/json",
    origin: process.env.NEXT_PUBLIC_ORIGIN,
  },
});
