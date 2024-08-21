import { baseApi } from "../baseApi";

const AdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    UpdatedUserData: builder.mutation({
      query: (bikeInfo) => ({
        url: "/bikes",
        method: "POST",
        body: bikeInfo,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdatedUserDataMutation } = AdminApi;
