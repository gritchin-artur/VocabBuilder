import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import authOperations from "./auth-operations";

const initialState = {
  id: null,
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const handleLogOutFulfilled = (state) => {
  state.name = null;
  state.email = null;
  state.token = null;
  state.isLoggedIn = false;
  state.isFetchingCurrentUser = false;
};

const handleFetchCurrentUserPending = (state) => {
  state.isRefreshing = true;
  state.isLoggedIn = false;
};

const handleFetchCurrentUserFulfilled = (state, { payload }) => {
  state.name = payload.name;
  state.email = payload.email;
  state.isLoggedIn = true;
  state.isFetchingCurrentUser = false;
};

const handleFetchCurrentUserReject = (state) => {
  state.isFetchingCurrentUser = false;
  state.isLoggedIn = false;
};

const handleRegisterLogInPending = (state, { payload }) => {
  state.isLoggedIn = false;
};

const handleRegisterLogInFulfilled = (state, { payload }) => {
  state.name = payload.name;
  state.email = payload.email;
  state.token = payload.token;
  state.isLoggedIn = payload.token ? true : false;
};

const handleRegisterLogInReject = (state, { payload }) => {
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(authOperations.logOut.pending, handleLogOutFulfilled)
      .addCase(
        authOperations.fetchCurrentUser.pending,
        handleFetchCurrentUserPending
      )
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        handleFetchCurrentUserFulfilled
      )
      .addCase(
        authOperations.fetchCurrentUser.rejected,
        handleFetchCurrentUserReject
      )

      .addMatcher(
        isAnyOf(
          authOperations.register.fulfilled,
          authOperations.logIn.fulfilled
        ),
        handleRegisterLogInFulfilled
      )
      .addMatcher(
        isAnyOf(
          authOperations.register.rejected,
          authOperations.logIn.rejected
        ),
        handleRegisterLogInReject
      )
      .addMatcher(
        isAnyOf(authOperations.register.pending, authOperations.logIn.pending),
        handleRegisterLogInPending
      );
  },
});

export default authSlice.reducer;

// const confused = "no";
// const myKey = confused;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);
