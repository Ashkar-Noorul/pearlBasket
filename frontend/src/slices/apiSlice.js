import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import { logout } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

//to handle any 401 responses and log the user out if the jwt and cookie expires
async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
