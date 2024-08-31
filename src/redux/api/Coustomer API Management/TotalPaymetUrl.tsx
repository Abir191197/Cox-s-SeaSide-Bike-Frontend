import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makePaymentUrl: builder.mutation({
      query: (bookingInfo) => ({
        // Inject bookingInfo directly into the URL path
        url: `/rentals/TotalPayment/${bookingInfo}`,
        method: "POST",
      }),
      invalidatesTags:["Booking"]
    }),
  }),
  overrideExisting: false,
});

export const { useMakePaymentUrlMutation } = userApi;
