import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_FIREBASE } from "../firebase/database";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories.json",
    }),
    getProducts: builder.query({
      query: (category) =>
        category ? `/products.json?orderBy="category"&equalTo="${category}"` :
        `/products.json`,
      transformResponse: (response) => {
        const data = Object.values(response);
        return data;
      },
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}.json`,
    }),
    getOrdersByUser: builder.query({
      query: (localId) => `/orders/${localId}.json`,
      transformResponse: (response) => {
        if (!response) return [];
        const data = Object.entries(response).map((item) => ({
          id: item[0],
          ...item[1],
        }));
        return data;
      },
      providesTags: ["order"],
    }),
    getOrderByUser: builder.query({
      query: ({ localId, orderId }) => `/orders/${localId}/${orderId}.json`,
    }),
    postOrder: builder.mutation({
      query: ({ localId, order }) => ({
        url: `/orders/${localId}.json`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductQuery,
  usePostOrderMutation,
  useGetOrdersByUserQuery,
  useGetOrderByUserQuery,
} = shopApi;
