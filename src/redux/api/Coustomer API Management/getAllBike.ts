import { baseApi } from "../baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBike: builder.query({
      query: ({ searchKeyWord, page, sort, limit }) => ({
        url: `/bikes?searchTerm=${searchKeyWord}&page=${page}&sort=${sort}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["BikeFetch"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBikeQuery } = bikeApi;
