import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Clothes } from "../types/ClothesTypes";

const clothesApi = createApi({
  reducerPath: "clothes",
  tagTypes: ["clothes"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getClothes: builder.query<Clothes[], void>({
      query: () => "clothes",
      providesTags: ["clothes"],
    }),
    getClothesById: builder.query({
      query: (id) => `clothes/${id}`,
      providesTags: ["clothes"],
    }),
    getLatestAddedProduct: builder.query<Clothes[], void>({
      query: () => `/clothes/latest`,
      providesTags: ["clothes"],
    }),
    filterClothesBy: builder.query({
      query: (filterBy: string) => `/clothes/filterBy?${filterBy}`,
      providesTags: ["clothes"],
    }),
    addClothesByType: builder.mutation<void, { type: string; data: Clothes }>({
      query: ({ type, data }) => ({
        url: `/${type}/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clothes"],
    }),
    updateClothesByType: builder.mutation<
      void,
      { type: string; id: string; data: Clothes }
    >({
      query: ({ type, id, data }) => ({
        url: `/${type}/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["clothes"],
    }),
    deleteClothes: builder.mutation<void, { type: string; id: string }>({
      query: ({ type, id }) => ({
        url: `/${type}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clothes"],
    }),
  }),
});

export const {
  useGetClothesQuery,
  useGetClothesByIdQuery,
  useGetLatestAddedProductQuery,
  useFilterClothesByQuery,
  useAddClothesByTypeMutation,
  useUpdateClothesByTypeMutation,
  useDeleteClothesMutation,
} = clothesApi;

export default clothesApi;
