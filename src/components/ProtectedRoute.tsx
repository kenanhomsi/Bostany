import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/authSelectors";
import { ENABLE_AUTH } from "../utils/constant";
import { useAppSelector } from "@/redux/store";
// import { persistor } from "../redux/store";
interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);
  const RegisterAs = useAppSelector(state => state.register.RegisterAs)

  if (!ENABLE_AUTH) {
    return <>{children}</>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/auth/register" />;
  }
  if (roles && (!currentUser || !roles.includes(RegisterAs))) {
    if (RegisterAs == 'Baser') {
      return <Navigate to="/Baser" />;
    } else if (RegisterAs == 'Bostany') {
      return <Navigate to="/Bostany" />;
    } else {
      return <Navigate to="/auth/register" />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
