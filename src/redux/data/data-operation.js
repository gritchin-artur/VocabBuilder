// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export const getAllWord = createAsyncThunk(
  "/words/all",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/words/all", {
        params: {
          category: "verb",
          isIrregular: true,
          page: 1,
          limit: 7,
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGNiODRiNjI4YjJhNTk2NjRjYmIxNiIsImlhdCI6MTcwOTE0NTE2OCwiZXhwIjoxNzA5MjI3OTY4fQ.0RclWnjFlue1j0qafpUcEA3hR9zpvMyZrUst9bDV8NM
`,
        },
      });
      return response.data;
    } catch (error) {
      toast.error("Oops. Something went wrong. Please try again.");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
