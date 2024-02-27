import GlobalStyled from "createGlobalStyle/createGlobalStyle.styled";
import Layout from "layout/layout";
import DictionaryPage from "pages/dictionary/dictionaryPage";
import TrainingPage from "pages/training/trainingPage";
import HomePage from "pages/home/homePage";
import RecommendPage from "pages/recommend/recommendPage";

import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "pages/registerPage/registerPage";
import { LogInPage } from "pages/logInPage/logInPage";
import PrivateRoute from "./Routes/PrivatRoute/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";

export const App = () => {
  return (
    <>
      {/* {isFetchingCurrentUser ? (
        <h1>...Loading</h1>
      ) : ( */}
      <GlobalStyled />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index exact element={<HomePage />} />
            <Route
              path="dictionary"
              element={
                <PrivateRoute>
                  <DictionaryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="recommend"
              element={
                <PrivateRoute>
                  <RecommendPage />
                </PrivateRoute>
              }
            />
            <Route
              path="training"
              element={
                <PrivateRoute>
                  <TrainingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LogInPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      {/* )} */}
      <Toaster />
    </>
  );
};
