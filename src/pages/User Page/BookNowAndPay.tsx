import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useCreateRentalSlotMutation } from "../../redux/api/Coustomer API Management/CreateRentalSlot";

interface BookNowAndPayProps {
  onClose: () => void;
  BikeData: any;
}

export default function BookNowAndPay({
  BikeData,
  onClose,
}: BookNowAndPayProps) {
  const [startTime, setStartTime] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Initialize the mutation hook
  const [createRentalSlot, { isLoading }] = useCreateRentalSlotMutation();

  // Handle the booking and payment process
 const handleBooking = async () => {
   if (startTime) {
     setIsProcessing(true); // Set loading state

     try {
       // Call the mutation with BikeData and startTime
       const res = await createRentalSlot({
         bikeId: BikeData._id,
         startTime,
       }).unwrap();

       const paymentUrl = res?.data?.payment_url;

       if (paymentUrl) {
         // Validate if URL is properly formatted
         if (
           paymentUrl.startsWith("http://") ||
           paymentUrl.startsWith("https://")
         ) {
           window.location.href = paymentUrl; // Redirect to payment URL in the same tab
         } else {
           console.error("Invalid payment URL format.");
         }
       } else {
         console.error("Payment URL not found in the response.");
       }
     } catch (error) {
       console.error("Booking process failed:", error);
     } finally {
       setIsProcessing(false); // Reset loading state
       onClose(); // Close modal after processing
     }
   }
 };


  // Get the current date and 7 days later date for min and max attributes
  const today = new Date();
  const minDate = today.toISOString().slice(0, 16); // Format without milliseconds and seconds
  const maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 16);

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white border border-gray-300 px-4 pt-6 pb-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-8">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-12 sm:w-12">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 text-gray-900">
                      Book Your Ride
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        Please select a start time for your booking. Make sure
                        the time is within the next 7 days.
                      </p>
                      <p className="mt-2 text-sm font-bold text-orange-600">
                        **Advance Payment of <strong>৳100</strong> required to
                        confirm your booking.
                      </p>
                    </div>
                    <div className="mt-4">
                      <input
                        type="datetime-local"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        min={minDate}
                        max={maxDate}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-base"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-5 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    disabled={!startTime || isProcessing || isLoading}
                    onClick={handleBooking}
                    className={`inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${
                      !startTime || isProcessing || isLoading
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}>
                    {isProcessing || isLoading
                      ? "Processing..."
                      : "Book Now And Pay"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
