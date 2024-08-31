import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TBike } from "../../../utiles/BikeType";

import { useDeleteBikeMutation } from "../../redux/api/Admin API Management/deleteBike";
import { selectCurrentUser } from "../../redux/api/auth API Management/authSlice";
import { useGetAllBikeQuery } from "../../redux/api/Coustomer API Management/getAllBike";
import Footer from "../Landing Page/Footer";
import BookNowAndPay from "../User Page/BookNowAndPay";
import BikeEditModal from "./BikeEditModal";
import CreateBikeForm from "./CreateBikeForm";
import Loading from "../../components/Loading";

export default function AllBikeAndCreate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateBikeModalOpen, setIsCreateBikeModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState<TBike | null>(null);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const limit = 8;

  const user = useSelector(selectCurrentUser);

  // Fetching data from the API
  const { data, error, isLoading } = useGetAllBikeQuery({
    searchKeyWord,
    page,
    limit,
    sort,
  });

  // Handle delete bike
  const [deleteBikeId] = useDeleteBikeMutation();

  const handleDeleteBike = async (bikeId: string) => {
    try {
      await deleteBikeId(  bikeId ).unwrap();
      toast.success("Bike Deleted Successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to delete bike: ${error.message}`);
      } else {
        toast.error("An unknown error occurred while deleting the bike.");
      }
    }
  };

  // Handle Edit Modal
  const handleOpenEditModal = (bike: TBike) => {
    setSelectedBike(bike);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => setIsEditModalOpen(false);

  // Handle Create Bike Modal
  const handleOpenCreateBikeModal = () => {
    setIsCreateBikeModalOpen(true);
  };

  const handleCloseCreateBikeModal = () => setIsCreateBikeModalOpen(false);

  const handleOpenModal = (bike: TBike) => {
    setSelectedBike(bike);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSort(event.target.value);
    setPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  if (isLoading) return <Loading></Loading>;;
  if (error) return <p>Error loading bikes!</p>;

  return (
    <>
      <div className="bg-gray-50 py-16 sm:py-24 lg:mx-auto lg:max-w-full lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending Bikes
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={handleOpenCreateBikeModal}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Create New Bike
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between mt-8 mb-6 px-4 sm:px-6 lg:px-0">
          <form onSubmit={handleSearch} className="flex space-x-4">
            <input
              type="text"
              placeholder="Search bikes..."
              value={searchKeyWord}
              onChange={(e) => setSearchKeyWord(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg">
              Search
            </button>
          </form>

          <select
            value={sort}
            onChange={handleFilterChange}
            className="px-8 py-2 border rounded-lg">
            <option value="">All</option>
            <option value="PerHour">Price</option>
            <option value="engine.displacement">CC</option>
            {/* Add more filter options as needed */}
          </select>
        </div>

        {/* Bike List */}
        <div className="mt-8 -mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {data?.data?.map((Bike: TBike) => (
            <div
              key={Bike._id}
              className="bg-white rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 relative">
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => handleOpenEditModal(Bike)}>
                  <PencilIcon className="h-5 w-5" />
                </button>

                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDeleteBike(Bike._id)}>
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="w-full h-50 rounded-t-lg overflow-hidden">
                {Bike.imgSrc && Bike.imgSrc.length > 0 ? (
                  <img
                    src={Bike.imgSrc[0]}
                    alt={Bike.fullbike_name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <p>No Image Available</p>
                  </div>
                )}
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  <span>{Bike.fullbike_name}</span>
                </h3>

                <p className="mt-2 text-xl font-semibold text-gray-900">
                  ${Bike.PerHour} Per Hour
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {Bike?.engine?.displacement}{" "}
                </p>
                <div className="mt-4 flex justify-between space-x-4">
                  <button
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-500 transition-colors duration-200"
                    onClick={() => handleOpenModal(Bike)}>
                    Book Now
                  </button>
                  <Link to={`/${user?.role}/Bike/${Bike._id}`}>
                    <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-colors duration-200">
                      Overview
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="relative mt-16 flex justify-center">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {[...Array(data?.totalPages || 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  page === index + 1
                    ? "bg-indigo-600 text-white"
                    : "text-gray-900"
                } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}>
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data?.totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>

      {/* Modals */}
      {isModalOpen && selectedBike && (
        <BookNowAndPay BikeData={selectedBike} onClose={handleCloseModal} />
      )}
      {isEditModalOpen && selectedBike && (
        <BikeEditModal BikeData={selectedBike} onClose={handleCloseEditModal} />
      )}
      {isCreateBikeModalOpen && (
        <CreateBikeForm onClose={handleCloseCreateBikeModal} />
      )}

      <Footer />
    </>
  );
}
