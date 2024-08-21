import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetWhoLogin: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
       
      }),
     
    }),
  }),
  overrideExisting: false,
});

export const { useGetWhoLoginQuery } = authApi;
