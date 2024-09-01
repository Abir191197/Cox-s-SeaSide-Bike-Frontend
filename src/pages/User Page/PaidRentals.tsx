
import Footer from "../Landing Page/Footer";

function PaidRentals({
  rentals,
  formatDateTime,
}: {
  rentals: any[];
  formatDateTime: (dateTimeString: string | number | Date) => string;
}) {
  return (
    <div className="bg-slate-200">
      <h3 className="text-lg font-semibold text-center py-4">Paid Rentals</h3>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rentals.map((RentalInfo) => (
            <div key={RentalInfo._id} className="flex flex-col h-full">
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={RentalInfo.bikeId?.imgSrc[0]} // Assuming imgSrc is an array
                    alt={RentalInfo.bikeId?.fullbike_name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {RentalInfo.bikeId?.fullbike_name}
                  </h3>
                  <p className="mt-1 text-base text-gray-500">
                    Advance Payment: {RentalInfo.advancePayment}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Start Time: {formatDateTime(RentalInfo.startTime)}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Return Time: {formatDateTime(RentalInfo.returnTime)}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Total Cost: {RentalInfo.totalCost}
                  </p>
                  <p className="mt-1 text-base text-gray-500">
                    Full Payment: {RentalInfo.totalCostPayment}
                  </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    Per Hour: ৳{RentalInfo.bikeId?.PerHour}
                  </p>
                </div>
              </div>
              {/* Additional content for paid rentals can go here */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaidRentals;
