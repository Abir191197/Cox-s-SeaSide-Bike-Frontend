import AllBikes from "../pages/User Page/AllBikes";
import EditProfile from "../pages/User Page/EditProfile";

import MyRentals from "../pages/User Page/MyRentals";
import SingleBikeOverView from "../pages/User Page/SingleBikeOverView";

import UserDash from "../pages/User Page/UserDash";


export const userPaths = [
  {
    index: true,
    element: <UserDash />,
  },
  {
    path: "dashboard",
    element: <UserDash />,
  },
  {
    path: "EditProfile",
    element: <EditProfile />,
  },
  {
    path: "Bikes",
    element: <AllBikes />,
  },
  {
    path: "Bike/:id",
    element: <SingleBikeOverView />,
  },
 
  {
    path: "Rentals",
    element: <MyRentals />,
  },
];
