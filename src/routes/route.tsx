import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";


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
    
    path: "/dashboard",
    element: 
      <ProtectedRoute  role="admin">
        <Dashboard></Dashboard>
      </ProtectedRoute>,
  
  }
]);

export default router;