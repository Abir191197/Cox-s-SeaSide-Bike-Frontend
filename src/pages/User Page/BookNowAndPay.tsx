import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface BookNowAndPayProps {
  onClose: () => void;
}

export default function BookNowAndPay({ onClose }: BookNowAndPayProps) {
  const [startTime, setStartTime] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Handle the booking and payment process
  const handleBooking = async () => {
    if (startTime) {
      setIsProcessing(true);
      try {
        // Replace with actual payment redirection logic
        window.location.href = "https://your-payment-gateway.com";
        // You can also integrate a more complex payment flow here
      } catch (error) {
        console.error("Payment process failed", error);
      } finally {
        setIsProcessing(false);
        onClose(); // Close modal after processing
      }
    }
  };

  // Get the current date and 7 days later date for min and max attributes
  const today = new Date();
  const minDate = today.toISOString().slice(0, 16); // Format without milliseconds and seconds
  const maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 16); // Format without milliseconds and seconds

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900">
                      Book Now
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please fill out the form below to schedule your booking.
                      </p>
                      <form className="mt-4 space-y-4">
                        <div>
                          <label
                            htmlFor="start-time"
                            className="block text-sm font-medium text-gray-700">
                            Start Time
                          </label>
                          <input
                            type="datetime-local"
                            id="start-time"
                            name="start-time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            min={minDate}
                            max={maxDate}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                          />
                        </div>
                        <p className="mt-2 text-sm font-bold text-orange-600">
                          **Advance Payment of <strong>৳100</strong> required to
                          confirm your booking.
                        </p>
                        <div className="mt-4 flex gap-4">
                          <button
                            type="button"
                            onClick={handleBooking}
                            disabled={isProcessing}
                            className="inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            {isProcessing ? "Processing..." : "Pay and Book"}
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-300"
                            onClick={() => onClose()}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
