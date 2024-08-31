import { baseApi } from "../baseApi";

const AdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateBike: builder.mutation({
      query: (createBike) => ({
        url: "/bikes",
        method: "POST",
        body: createBike,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateBikeMutation } = AdminApi;
