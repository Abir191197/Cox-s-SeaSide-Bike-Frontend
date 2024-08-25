import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBike: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
        
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useGetAllBikeQuery} = userApi;
