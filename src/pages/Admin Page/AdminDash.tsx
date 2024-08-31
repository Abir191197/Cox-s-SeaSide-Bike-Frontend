import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/api/auth API Management/authSlice";
import { useGetWhoLoginQuery } from "../../redux/api/auth API Management/WhoLoginNowAPI";
import Loader from "../../components/Loader";

const stats = [
  { label: "Vacation days left", value: 12 },
  { label: "Sick days left", value: 4 },
  { label: "Personal days left", value: 2 },
];

export default function AdminDash() {
  const user = useSelector(selectCurrentUser);

  const { data: UserData, isLoading } = useGetWhoLoginQuery(undefined);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-zinc-300 p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              {UserData?.imageUrl ? (
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={UserData.imageUrl}
                  alt={UserData.name}
                />
              ) : (
                <div className="mx-auto h-20 w-20 rounded-full bg-gray-200" />
              )}
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-2xl font-medium text-gray-600">Welcome -</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {UserData?.data?.name || "Guest"}
              </p>
              <p className="text-sm font-medium text-gray-600">
                {UserData?.data?.role || "User"}
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <Link
              to={`/${user?.role}/EditProfile`}
              className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Edit profile
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-center text-sm font-medium">
            <span className="text-gray-900">{stat.value}</span>{" "}
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
