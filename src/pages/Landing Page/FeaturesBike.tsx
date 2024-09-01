import { useState } from "react";
import { Link } from "react-router-dom";
import { TBike } from "../../../utiles/BikeType";
import Loading from "../../components/Loading";
import { useGetAllFeaturesBikeQuery } from "../../redux/api/Coustomer API Management/getFeatureBike";

export default function FeaturesBike() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const limit = 8;

  // Fetching data from the API
  const { data, error, isLoading } = useGetAllFeaturesBikeQuery({
    searchKeyWord,
    page,
    limit,
    sort,
  });

  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setPage(1); // Reset to the first page on new search
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading bikes!</p>;

  return (
    <div className="bg-gray-50 py-10 lg:mx-auto lg:max-w-full lg:px-8">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Features Bike
        </h2>
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
          
        </form>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-8 py-2 border rounded-lg">
          <option value="">Sort By</option>
          <option value="PerHour">Price Low to High</option>
          <option value="-PerHour">Price High to Low</option>
          <option value="engine.displacement">CC Low to High</option>
          <option value="-engine.displacement">CC High to Low</option>
        </select>
      </div>

      {/* Bike List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {data?.data?.map((Bike: TBike) => (
          <div
            key={Bike._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="w-full h-48 rounded-t-lg overflow-hidden">
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
                {Bike.fullbike_name}
              </h3>
              <p className="mt-2 text-xl font-semibold text-gray-900">
                ${Bike.PerHour} Per Hour
              </p>
              <p className="mt-1 text-sm font-medium text-black">
                {Bike?.engine?.displacement
                  ? parseFloat(Bike.engine.displacement).toFixed(0)
                  : "N/A"}
                CC
              </p>
              <div className="mt-4 flex justify-between space-x-4">
                <Link to="/Login">
                  <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-500 transition-colors duration-200">
                    Book Now
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-colors duration-200">
                    Overview
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-8">
        <Link to="/login">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
