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
            <Route path="dictionary" element={<DictionaryPage />} />
            <Route path="recommend" element={<RecommendPage />} />
            <Route path="training" element={<TrainingPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      {/* )} */}
      <Toaster />
    </>
  );
};
