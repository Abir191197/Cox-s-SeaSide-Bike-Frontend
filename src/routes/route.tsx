import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";


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
]);

export default router;