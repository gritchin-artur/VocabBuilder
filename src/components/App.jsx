import GlobalStyled from "createGlobalStyle/createGlobalStyle.styled";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

const Layout = lazy(() => import("layout/layout"));
const RegisterPage = lazy(() => import("pages/registerPage/registerPage"));
const LogInPage = lazy(() => import("pages/logInPage/logInPage"));
const PrivateRoute = lazy(() => import("./Routes/PrivatRoute/PrivateRoute"));
const PublicRoute = lazy(() => import("./Routes/PublicRoute/PublicRoute"));
const HomePage = lazy(() => import("pages/home/homePage"));
const RecommendPage = lazy(() => import("pages/recommend/recommendPage"));
const TrainingPage = lazy(() => import("pages/training/trainingPage"));
const DictionaryPage = lazy(() => import("pages/dictionary/dictionaryPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    (state) => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>...Loading</h1>
      ) : (
        <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                exact
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
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
      )}
      <GlobalStyled />
      <Toaster />
    </>
  );
};
