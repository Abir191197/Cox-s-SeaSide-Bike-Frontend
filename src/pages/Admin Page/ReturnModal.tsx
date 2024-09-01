import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { useReturnBikeMutation } from "../../redux/api/Admin API Management/returnBike";

interface ReturnModalProps {
  rentalId: string;
  onClose: () => void;
}

export default function ReturnModal({ rentalId, onClose }: ReturnModalProps) {
  const [returnTime, setReturnTime] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const [returnBike, { isLoading }] = useReturnBikeMutation();

  const handleReturn = async () => {
    // Validate date format
    const isValidDate = (dateString: string) => {
      const date = new Date(dateString);
      return !isNaN(date.getTime());
    };

    if (returnTime && rentalId && isValidDate(returnTime)) {
      setIsProcessing(true);
      try {
        // Log the values to check them before sending to the API
        

        await returnBike({ id: rentalId, returnTime }).unwrap();

        toast.success("Bike returned successfully");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Bike return failed");
      } finally {
        setIsProcessing(false);
        onClose(); // Close modal after processing
      }
    } else {
      toast.error("Please provide a valid return time and rental ID.");
    }
  };

  const today = new Date();
  const minDate = today.toISOString().slice(0, 16);

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
                      Return Bike
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        Please select the return date and time for the bike.
                      </p>
                    </div>
                    <div className="mt-4">
                      <input
                        type="datetime-local"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                        min={minDate}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-base"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-5 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    disabled={!returnTime || isProcessing || isLoading}
                    onClick={handleReturn}
                    className={`inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${
                      !returnTime || isProcessing || isLoading
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}>
                    {isProcessing || isLoading
                      ? "Processing..."
                      : "Return Bike"}
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
