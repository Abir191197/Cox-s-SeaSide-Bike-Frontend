import { baseApi } from "../baseApi";

const GetTextAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllsample: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      
      // providesTags: ["Courses"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllsampleQuery } = GetTextAPI;
