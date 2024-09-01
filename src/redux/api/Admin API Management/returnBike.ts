import { baseApi } from "../baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    returnBike: builder.mutation<void, { id: string; returnTime: string }>({
      query: ({ id, returnTime }) => ({
        url: `/rentals/return/${id}`, // ID included in the URL path
        method: "PUT",
        body: { returnTime }, // Body should be an object with returnTime as a property
      }),
      invalidatesTags: ["RentalFetch"],
    }),
  }),
  overrideExisting: false,
});

export const { useReturnBikeMutation } = adminApi;
