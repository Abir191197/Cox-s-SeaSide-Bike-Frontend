import { baseApi } from "../baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    pricePerHourUpdated: builder.mutation<
      void,
      { id: string; PerHour: number } // Adjusted to use `PerHour`
    >({
      query: ({ id, PerHour }) => ({
        url: `/bikes/${id}`,
        method: "PUT",
        body: { PerHour }, // Ensure the key matches the expected API field name
      }),
      invalidatesTags:["BikeFetch"]
    }),
  }),
  overrideExisting: false,
});

export const { usePricePerHourUpdatedMutation } = adminApi;
