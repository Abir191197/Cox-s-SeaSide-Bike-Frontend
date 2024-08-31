import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateRentalSlot: builder.mutation({
      query: (rentalInfo) => ({
        url: "/rentals",
        method: "POST",
        body: rentalInfo,
      }),
      invalidatesTags:["Booking","RentalFetch"]
    }),
  }),
  overrideExisting: false,
});

export const { useCreateRentalSlotMutation } = userApi;
