import { CreditCardIcon, UserIcon } from "@heroicons/react/24/outline";
import { SetStateAction, useState } from "react";
import { useGetAllRentalBikeInfoQuery } from "../../redux/api/Coustomer API Management/getAllRentalBike";
import UnpaidRentals from "./UnpaidRentals";
import PaidRentals from "./PaidRentals";
import Loading from "../../components/Loading";
interface Rental {
  totalCostPayment: string;
  // Add other properties of rental here if needed
}
const tabs = [
  { name: "Unpaid", href: "#", icon: UserIcon, current: true },
  { name: "Paid", href: "#", icon: CreditCardIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MyRentals() {
  const {
    data: RentalData,
    isLoading,
    error,
  } = useGetAllRentalBikeInfoQuery(undefined);

  const [currentTab, setCurrentTab] = useState(
    tabs.find((tab) => tab.current)?.name || "Unpaid"
  );

  const handleTabChange = (tabName: SetStateAction<string>) => {
    setCurrentTab(tabName);
  };

 const formatDateTime = (dateTimeString: string | number | Date) => {
   if (!dateTimeString) {
     return "Not returned yet";
   }
   const options: Intl.DateTimeFormatOptions = {
     year: "numeric",
     month: "long",
     day: "numeric",
     hour: "numeric",
     minute: "numeric",
   };
   return new Date(dateTimeString).toLocaleString(undefined, options);
 };


  const filteredRentals =
    RentalData?.data?.bookings.filter((rental: Rental) =>
      currentTab === "Unpaid"
        ? rental.totalCostPayment === "Pending"
        : rental.totalCostPayment === "Paid"
    ) || [];



  return (
    <div className="flex flex-col items-center">
      {/* Mobile tab selection */}
      <div className="sm:hidden w-full max-w-md px-4">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          value={currentTab}
          onChange={(e) => handleTabChange(e.target.value)}>
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block w-full max-w-2xl px-4">
        <nav
          className="isolate flex justify-center divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab.name)}
              className={classNames(
                currentTab === tab.name
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-white py-3 px-4 text-center text-sm font-medium border-b-2"
              )}
              aria-current={currentTab === tab.name ? "page" : undefined}>
              <tab.icon
                className={classNames(
                  currentTab === tab.name
                    ? "text-indigo-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "inline h-6 w-6 mr-2"
                )}
                aria-hidden="true"
              />
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  currentTab === tab.name ? "bg-indigo-500" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="relative w-full  px-4">
        {isLoading && <Loading></Loading>}
        {error && <p>Error fetching rentals</p>}

        {!isLoading && !error && filteredRentals.length === 0 && (
          <p>No rentals found for {currentTab.toLowerCase()} rentals.</p>
        )}

        {currentTab === "Unpaid" &&
          !isLoading &&
          !error &&
          filteredRentals.length > 0 && (
            <UnpaidRentals
              rentals={filteredRentals}
              formatDateTime={formatDateTime}
            />
          )}

        {currentTab === "Paid" &&
          !isLoading &&
          !error &&
          filteredRentals.length > 0 && (
            <PaidRentals
              rentals={filteredRentals}
              formatDateTime={formatDateTime}
            />
          )}
      </div>
    </div>
  );
}
