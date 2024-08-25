import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/Admin Page/AdminDashboard";

import { userPaths } from "./user.route";
import { adminPaths } from "./admin.route";
import UserDashboard from "../pages/User Page/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <UserDashboard />
      </ProtectedRoute>
    ),
    children: userPaths,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: adminPaths,
  },
]);

export default router;
