import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRentalBikeInfo: builder.query({
      query: () => ({
        url: "/rentals",
        method: "GET",
      }),
      providesTags:["Booking"]
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllRentalBikeInfoQuery } = userApi;
