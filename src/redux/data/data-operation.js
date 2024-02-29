// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import toast from "react-hot-toast";

// export const contactsApi = createApi({
//   reducerPath: "contactsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://connections-api.herokuapp.com/",
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ["Contact"],
//   endpoints: (builder) => ({
//     getContacts: builder.query({
//       query: () => `contacts`,
//       providesTags: ["Contacts"],
//     }),
//     deleteContacts: builder.mutation({
//       query: (contactId) => ({
//         url: `contacts/${contactId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Contacts"],
//     }),
//     addContact: builder.mutation({
//       query: (newContact) => ({
//         url: `contacts`,
//         method: "POST",
//         body: newContact,
//       }),
//       invalidatesTags: ["Contacts"],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactsMutation,
//   useAddContactMutation,
// } = contactsApi;

export const getAllWord = createAsyncThunk(
  "/words/all",
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const params = {
      keyword: formData.filters,
      category: formData.statistics.toLowerCase(),
      isIrregular: "",
      page: 1,
      limit: 7,
    };

    try {
      const response = await axios.get("/words/all", { params });
      token.set(persistedToken);
      return response.data;
    } catch (error) {
      toast.error("Oops. Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
