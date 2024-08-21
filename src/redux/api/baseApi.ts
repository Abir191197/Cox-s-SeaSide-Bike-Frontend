import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://bike-rental-service-backend-two.vercel.app/api",
  credentials: "include", // Ensure cookies are included in requests

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token; // Replace with your actual state slice
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
