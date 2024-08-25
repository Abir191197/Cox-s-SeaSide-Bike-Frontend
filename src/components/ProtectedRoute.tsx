import { ReactNode } from "react";



import { Navigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, TUser, useCurrentToken } from "../redux/api/auth API Management/authSlice";
import { verifyToken } from "../../utiles/verifyToken";


interface ProtectedRouteProps {
  children: ReactNode;
  role: string;
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {


  const token = useAppSelector(useCurrentToken);


  let user: TUser | null = null;
  
  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
