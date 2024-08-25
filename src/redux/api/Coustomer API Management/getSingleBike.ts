import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleBike: builder.query({
      query: (id) => ({
        url: `/bikes/${id}`, 
        method: "GET",
      }),
    }),
    
  }),
  overrideExisting: false,
});

export const { useGetSingleBikeQuery } = userApi; // Export the hook for fetching a single bike
