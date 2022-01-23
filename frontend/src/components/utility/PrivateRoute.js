import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/AuthContext";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children }) {
  const auth = useAuthContext();
  const location = useLocation();

  if (!auth.userData.loggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
