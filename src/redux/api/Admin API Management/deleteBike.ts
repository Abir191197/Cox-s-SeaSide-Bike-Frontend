import { baseApi } from "../baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteBike: builder.mutation<void, { id: string }>({
      query: ( id ) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BikeFetch"],
    }),
  }),
  overrideExisting: false,
});

export const { useDeleteBikeMutation } = adminApi;
