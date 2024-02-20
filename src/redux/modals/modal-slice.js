import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpenMobile: false,
    // isModalOpenLogIn: false,
    // isModalOpenTrialLesson: false,
    // isBookTrialLesson: [],
  },
  reducers: {
    openModalMobile: (state) => {
      state.isModalOpenMobile = true;
    },
    closeModalMobile: (state) => {
      state.isModalOpenMobile = false;
    },
    // openModalLogIn: (state) => {
    //   state.isModalOpenLogIn = true;
    // },
    // closeModalLogIn: (state) => {
    //   state.isModalOpenLogIn = false;
    // },
    // openModalTrialLesson: (state) => {
    //   state.isModalOpenTrialLesson = true;
    // },
    // closeModalTrialLesson: (state) => {
    //   state.isModalOpenTrialLesson = false;
    // },
    // addBookTrialLesson(state, { payload }) {
    //   state.isBookTrialLesson.splice(0, 1, payload);
    // },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalMobile,
  closeModalMobile,
  // openModalLogIn,
  // closeModalLogIn,
  // openModalTrialLesson,
  // closeModalTrialLesson,
  // addBookTrialLesson,
} = modalSlice.actions;
