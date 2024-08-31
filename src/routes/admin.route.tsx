
import AdminDash from "../pages/Admin Page/AdminDash";
import AllBikeAndCreate from "../pages/Admin Page/AllBikeAndCreate";
import AllRental from "../pages/Admin Page/AllRental";
import EditProfile from "../pages/User Page/EditProfile";
import SingleBikeOverView from "../pages/User Page/SingleBikeOverView";

export const adminPaths = [
  {
    index: true,
    element: <AdminDash></AdminDash>,
  },
  {
    path: "dashboard",
    element: <AdminDash />,
  },
  {
    path: "EditProfile",
    element: <EditProfile />,
  },
  {
    path: "Bikes",
    element: <AllBikeAndCreate />,
  },
  {
    path: "Bike/:id",
    element: <SingleBikeOverView />,
  },
  {
    path: "All Rentals",
    element: <AllRental />,
  },
];
