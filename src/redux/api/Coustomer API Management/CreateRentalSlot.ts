import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateRentalSlot: builder.mutation({
      query: (rentalInfo) => ({
        url: "/rentals",
        method: "POST",
        body: rentalInfo,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateRentalSlotMutation } = userApi;
