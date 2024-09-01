import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makePaymentUrl: builder.mutation({
      query: (TotalPayTran_id) => ({
        url: `/rentals/TotalPayment/${TotalPayTran_id}`, // Ensure correct URL format
        method: "POST",
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
  overrideExisting: false,
});

export const { useMakePaymentUrlMutation } = userApi;
