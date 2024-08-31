import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {  XMarkIcon } from "@heroicons/react/24/outline";
import { usePricePerHourUpdatedMutation } from "../../redux/api/Admin API Management/updatedBike";



export default function BikeEditModal({ BikeData, onClose }) {
  // State to hold the updated PerHour value
  const [PerHour, setPerHour] = useState(BikeData?.PerHour || 0);

  // Mutation hook for updating PerHour
  const [updatePricePerHour, { isLoading, isError }] =
    usePricePerHourUpdatedMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updatePricePerHour({ id: BikeData._id, PerHour }).unwrap();
      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error("Failed to update price per hour:", error);
    }
  };

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
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={onClose}>
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={BikeData?.imgSrc[0] || ""}
                          alt={BikeData?.fullbike_name}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {BikeData?.fullbike_name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-3">
                        <h3 id="information-heading" className="sr-only">
                          Bike information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          ${BikeData?.PerHour} per hour
                        </p>

                        {/* Reviews */}
                       

                       
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-16">
                        <h3 id="options-heading" className="sr-only">
                          Update Price per Hour
                        </h3>

                        <form onSubmit={handleSubmit}>
                          <div>
                            <label
                              htmlFor="pricePerHour"
                              className="block text-sm font-medium text-gray-700">
                              Price per Hour
                            </label>
                            <input
                              type="number"
                              name="pricePerHour"
                              id="pricePerHour"
                              value={PerHour}
                              onChange={(e) =>
                                setPerHour(Number(e.target.value))
                              }
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                            />
                          </div>

                          <div className="mt-6">
                            <button
                              type="submit"
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                              disabled={isLoading}>
                              {isLoading ? "Updating..." : "Save Changes"}
                            </button>
                            {isError && (
                              <p className="mt-2 text-sm text-red-500">
                                Failed to update price. Please try again.
                              </p>
                            )}
                          </div>
                        </form>
                      </section>
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
