import AllBikes from "../pages/User Page/AllBikes";
import BookNowAndPay from "../pages/User Page/BookNowAndPay";
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
    path: "Bikes",
    element: <AllBikes />,
  },
  {
    path: "Bikes/:id",
    element: <SingleBikeOverView />,
  },
  {
    path: "paid",
    element: <SingleBikeOverView />,
  },
  {
    path: "Rentals",
    element: <MyRentals />,
  },
  {
    path: "unpaid",
    element: (
      <BookNowAndPay
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  },
];
