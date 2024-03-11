import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modals/modal-slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import authSlise from "./auth/auth-slise";
import dataSlise from "./data/data-slise";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const modalPersistConfig = {
  key: "modal",
  storage,
  whitelist: [
    "isModalOpenMobile",
    "isModalOpenAddWord",
    "isModalOpenTrainOneseif",
    "isModalOpenConfirmation",
    "isModalOpenEdit",
    "clickWordCoordinates",
    "clickWordId",
    "isModalOpenWellDone",
  ],
};

const dataPersistConfig = {
  key: "data",
  storage,
  whitelist: [
    "words",
    "categories",
    "allWords",
    "statistics",
    "tasks",
    "answers",
  ],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlise),
  modal: persistReducer(modalPersistConfig, modalReducer),
  data: persistReducer(dataPersistConfig, dataSlise),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
