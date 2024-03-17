import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, restricted = true }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <div>{shouldRedirect ? children : <Navigate to="/" />}</div>;
}
