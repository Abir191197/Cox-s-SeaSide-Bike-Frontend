import { baseApi } from "../baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    returnBike: builder.mutation<void, string>({
      query: (id) => ({
        url: `/rentals/${id}/return`,
        method: "PUT",
      }),
      invalidatesTags: ["RentalFetch"],
    }),
  }),
  overrideExisting: false,
});

export const { useReturnBikeMutation } = adminApi;
