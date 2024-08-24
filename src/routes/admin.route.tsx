import AdminDashboard from "../pages/Admin Page/AdminDashboard";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
];
