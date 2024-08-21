import { baseApi } from "../baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    pricePerHourUpdated: builder.mutation<
      void,
      { id: string; pricePerHour: number }
    >({
      query: ({ id, pricePerHour }) => ({
        url: `/bikes/${id}`,
        method: "PUT",
        body: { pricePerHour },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { usePricePerHourUpdatedMutation } = adminApi;
