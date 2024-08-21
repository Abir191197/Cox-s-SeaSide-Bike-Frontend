import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    UpdatedUserData: builder.mutation({
      query: (UpdatedData) => ({
        url: "/users/me", 
        method: "PUT",
        body: UpdatedData,
      }),
      
    }),
  }),
  overrideExisting: false,
});

export const { useUpdatedUserDataMutation } = authApi;
