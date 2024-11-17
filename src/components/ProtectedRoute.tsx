import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/authSelectors";
import { ENABLE_AUTH } from "../utils/constant";
// import { persistor } from "../redux/store";
interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);

  if (!ENABLE_AUTH) {
    return <>{children}</>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/auth/register" />;
  }
  // persistor.purge();
  if (roles && (!currentUser || !roles.includes(currentUser.data.type))) {
    return <Navigate to="/auth/register" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
