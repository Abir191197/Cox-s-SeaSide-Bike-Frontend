import { baseApi } from "../baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    DeleteBike: builder.mutation<
      void,
      { id: string;}
    >({
      query: ({ id }) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
       
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useDeleteBikeMutation } = adminApi;
