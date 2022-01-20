import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/AuthContext";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  let { userData } = useAuthContext();
  const location = useLocation();

  return userData.loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
