import { baseApi } from "../baseApi";

const AdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GETAllRentalBikes: builder.query({
      query: () => ({
        url: "/rentals/AllRentals",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGETAllRentalBikesQuery } = AdminApi;
