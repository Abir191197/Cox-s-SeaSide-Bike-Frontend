import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { useGETAllRentalBikesQuery } from "../../redux/api/Admin API Management/AllRentals";
import { useReturnBikeMutation } from "../../redux/api/Admin API Management/returnBike";


export default function AllRental() {
  // Fetch all rental data
  const { data: AllRentalData, isLoading: AllRentalLoading } =
    useGETAllRentalBikesQuery(undefined);

  // Define the return bike mutation
  const [ReturnBookingId, {  isLoading: isReturning }] =
    useReturnBikeMutation();

  // Handle the bike return
  const handleReturnId = async (rentalId: any) => {
    try {
      // Call the mutation with the rentalId and unwrap the response
      const res = (await ReturnBookingId(
        rentalId
      ).unwrap()) ;

      // Check if the response indicates success
      if (res.success) {
        toast.success(res.message || "Bike returned successfully");
      } else {
        toast.error("Bike return failed");
      }
    } catch (error) {
      toast.error("Bike return failed");
    }
  };

  if (AllRentalLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (isReturning) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 pt-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Rentals
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all rentals including bike details, booking ID, user
              info, start and return times, status, and total payment.
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 text-left text-sm font-semibold text-black sm:pl-0">
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Bike Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Booking ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Rental By
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Start Time
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Return Time
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Payment Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Total Pay
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {AllRentalData?.data?.map((rental, index) => (
                      <tr key={rental._id}>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-12 w-12 flex-shrink-0">
                              <img
                                className="h-12 w-12 rounded-full"
                                src={rental.bikeId.imgSrc[0]} // Use the first image
                                alt={rental.bikeId.fullbike_name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold text-black">
                                {rental.bikeId.fullbike_name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm font-medium text-black">
                          {rental.bookingId}
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm font-medium text-black">
                          <div className="text-black">{rental.userId.name}</div>
                          <div className="mt-1 text-black">
                            {rental.userId.phone}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm font-medium text-black">
                          {new Date(rental.startTime).toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm font-medium text-black">
                          {rental.returnTime === null
                            ? "Not Returned"
                            : new Date(rental.returnTime).toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm font-medium text-black text-center">
                          <span
                            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ${
                              rental.totalCostPayment === "Paid"
                                ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
                                : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                            }`}>
                            {rental.totalCostPayment}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm font-bold text-black">
                          ৳ {rental.totalCost.toFixed(2)}
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-semibold text-black sm:pr-0">
                          {rental.returnTime === null && (
                            <button
                              onClick={() => handleReturnId(rental._id)}
                              className="bg-green-50 text-green-700">
                              Return
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
