import { baseApi } from "../baseApi";

const SentNewRegistrationDataAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    UserRegistration: builder.query({
      query: (UserDetails) => ({
        url: "/auth/signup",
        method: "POST",
        body: UserDetails,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUserRegistrationQuery } = SentNewRegistrationDataAPI;
