import { baseApi } from "../baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeaturesBike: builder.query({
      query: ({ searchKeyWord, page, sort, limit, filter }) => {
        // Ensure filter is a valid JSON string
        const filterParam = filter
          ? `&filter=${encodeURIComponent(filter)}`
          : "";
        return {
          url: `/bikes/FeatureBike?searchTerm=${searchKeyWord}&page=${page}&sort=${sort}&limit=${limit}${filterParam}`,
          method: "GET",
        };
      },
      providesTags: ["BikeFetch"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllFeaturesBikeQuery } = bikeApi;
