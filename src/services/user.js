import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_FIREBASE } from "../firebase/database";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  tagTypes: ["userImage", "userLocation"],
  endpoints: (builder) => ({
    patchImageProfile: builder.mutation({
      query: ({ image, localId }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: { image },
      }),
      invalidatesTags: ["userImage"],
    }),
    getUser: builder.query({
      query: ({ localId }) => `users/${localId}.json`,
      transformResponse: (response) => {
        if (!response) return null;
        return response;
      },
      providesTags: ["userImage"],
    }),
  }),
});

export const { usePatchImageProfileMutation, useGetUserQuery } = userApi;
