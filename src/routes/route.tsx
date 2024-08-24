import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/Admin Page/AdminDashboard";
import UserDashboard from "../pages/User Page/UserDashboard";
import { userPaths } from "./user.route";
import { adminPaths } from "./admin.route";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [],
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/Registration",
    element: <Registration></Registration>,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <UserDashboard></UserDashboard>
      </ProtectedRoute>
    ),
    children: userPaths,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
       <AdminDashboard></AdminDashboard>
      </ProtectedRoute>
    ),
    children: adminPaths,
  },
]);

export default router;