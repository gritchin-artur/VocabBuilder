import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import toast from "react-hot-toast";

export const getAllCategories = createAsyncThunk(
  "/words/categories",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      const response = await axios.get("/words/categories");
      token.set(persistedToken);
      return response.data;
    } catch (error) {
      toast.error("Oops. Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ownWord = createAsyncThunk(
  "/words/own",
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const params = {
      keyword: formData.filters,
      category: formData.statistics,
      isIrregular: formData.isIrregular,
      page: formData.page,
      limit: 7,
    };

    try {
      const response = await axios.get("/words/own", { params });
      token.set(persistedToken);
      return response.data;
    } catch (error) {
      toast.error("Oops. Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createWord = createAsyncThunk(
  "/words/create",
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      const response = await axios.post("/words/create", formData);
      token.set(persistedToken);
      toast.success(`Succsess created  ${response.data.en}`);
      return response.data;
    } catch (error) {
      toast.error("Oops. Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "/words/delete",
  async (wordDelete, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(wordDelete._id);

    try {
      const response = await axios.delete(`/words/delete/${wordDelete._id}`);
      token.set(persistedToken);
      toast.success(`Succsess delete  ${response.wordDelete.en}`);
      return response.data;
    } catch (error) {
      toast.error("Oops. Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
