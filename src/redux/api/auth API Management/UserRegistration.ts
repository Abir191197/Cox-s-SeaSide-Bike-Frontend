import { baseApi } from "../baseApi";

const SentNewRegistrationDataAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (data) => {
        // Set default role to "admin" if not provided
        const updatedData = {
          ...data,
          role: data.role || "admin", // Set the default role
        };

        return {
          url: "/auth/signup",
          method: "POST",
          body: updatedData,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useUserRegistrationMutation } = SentNewRegistrationDataAPI;
