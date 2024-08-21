import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    rentBikeInfo: builder.mutation({
      query: (rentalInfo) => ({
        url: "/rentals",
        method: "POST",
        body: rentalInfo,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRentBikeInfoMutation } = userApi;
