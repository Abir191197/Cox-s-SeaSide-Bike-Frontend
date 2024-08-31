import React from "react";
import { useMakePaymentUrlMutation } from "../../redux/api/Coustomer API Management/TotalPaymetUrl";
import Footer from "../Landing Page/Footer";

interface BikeInfo {
  _id: string; // Bike ID
  fullbike_name: string;
  PerHour: number;
  imgSrc: string[];
}

interface RentalInfo {
  _id: string; // Rental ID
  bikeId: BikeInfo; // Bike details as an object
  bookingId: string;
  TotalPayTran_id: string;
  startTime: string;
  returnTime: string;
  totalCost: number;
  advancePayment: string;
  totalCostPayment: string;
  isReturned: boolean;
}

interface UnpaidRentalsProps {
  rentals: RentalInfo[];
  formatDateTime: (dateTimeString: string | number | Date) => string;
}

const UnpaidRentals: React.FC<UnpaidRentalsProps> = ({
  rentals,
  formatDateTime,
}) => {
  const [makePaymentUrl, { isLoading, isError,isSuccess }] = useMakePaymentUrlMutation();

 

  const handlePayNowClick = async (bikeId: string) => {
    try {
     
      const response = await makePaymentUrl( bikeId).unwrap();
    
       const paymentUrl = response.data.payment_url;

       if (paymentUrl) {
        window.location.href = paymentUrl;
       }
    } catch (error) {
      console.error("Failed to fetch payment URL:", error);
      // Optionally: Show an error message to the user
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Unpaid Rentals</h3>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {rentals.map((rental) => (
            <div key={rental._id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={rental.bikeId.imgSrc[0]} // Assuming imgSrc is an array
                    alt={rental.bikeId.fullbike_name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {rental.bikeId.fullbike_name}
                  </h3>
                  <p className="mt-1 text-base text-gray-500">
                    Advance Payment: {rental.advancePayment}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Start Time: {formatDateTime(rental.startTime)}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Return Time: {formatDateTime(rental.returnTime)}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Total Cost: {rental.totalCost}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Full Payment: {rental.totalCostPayment}
                  </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    Per Hour: ৳{rental.bikeId.PerHour}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className={`relative flex items-center justify-center rounded-md border border-transparent px-8 py-2 text-sm font-medium text-gray-900 ${
                    rental.isReturned ==true
                      ? "bg-green-600 hover:bg-green-200 cursor-pointer"
                      : "bg-red-300 cursor-not-allowed"
                  }`}
                  disabled={rental.isReturned === false }
                  onClick={() => handlePayNowClick(rental.bikeId._id)}>
                  { "Pay Now"}
                </button>
              </div>
              {isError && (
                <p className="mt-2 text-sm text-red-500">
                  Failed to load payment URL. Please try again.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UnpaidRentals;
