import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Footer from "../Landing Page/Footer";
import BookNowAndPay from "./BookNowAndPay";
import { useParams } from "react-router";
import { useGetSingleBikeQuery } from "../../redux/api/Coustomer API Management/getSingleBike";

import { TBike } from "../../../utiles/BikeType";
import Loading from "../../components/Loading";


const reviews = {
  href: "#",
  average: 4,
  totalCount: 117,
  featured: [
    {
      id: 1,
      title: "This is the best white t-shirt out there",
      rating: 5,
      content:
        "<p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>",
      author: "Mark Edwards",
      avatarSrc:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      title: "Adds the perfect variety to my wardrobe",
      rating: 4,
      content:
        "<p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>",
      author: "Blake Reid",
      avatarSrc:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    },
    {
      id: 3,
      title: "All good things come in 6-Packs",
      rating: 5,
      content:
        "<p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>",
      author: "Ben Russel",
      avatarSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleBikeOverView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState<TBike | null>(null);

  const { id } = useParams<{ id: string }>();
  const { data: SingleBikeData, isLoading } = useGetSingleBikeQuery(id);

  if (isLoading) return <Loading></Loading>;;

  if (!SingleBikeData || !SingleBikeData.data) return <p>Data not found</p>;

  const bike = SingleBikeData.data as TBike;

  const handleOpenModal = () => {
    setSelectedBike(bike);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-slate-200">
      <main className="pt-5 sm:pt-5">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {bike.imgSrc.length > 0 && (
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={bike.imgSrc[0]}
                alt={`${bike.fullbike_name} Image 1`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            {bike.imgSrc.length > 1 && (
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={bike.imgSrc[1]}
                  alt={`${bike.fullbike_name} Image 2`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            )}
            {bike.imgSrc.length > 2 && (
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={bike.imgSrc[2]}
                  alt={`${bike.fullbike_name} Image 3`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            )}
          </div>
          {bike.imgSrc.length > 3 && (
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={bike.imgSrc[3]}
                alt={`${bike.fullbike_name} Image 4`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {bike.fullbike_name}
            </h1>
            <p className="text-base text-gray-900 mt-2">Type: {bike.type}</p>
            <p className="text-base text-gray-900 mt-2">
              Engine: {bike.engine.type}, {bike.engine.displacement},{" "}
              {bike.engine.power}
            </p>
            <p className="text-base text-gray-900 mt-2">
              Weight: {bike.weight}
            </p>
            <p className="text-base text-gray-900 mt-2">
              Fuel Capacity: {bike.fuel_and_lubrication.fuel_capacity}
            </p>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Bike information</h2>
            <p className="text-3xl tracking-tight text-orange-600">
              Per Hour ৳ {bike.PerHour}
            </p>

            <form className="mt-10">
              <button
                onClick={handleOpenModal}
                type="button"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Book now And Pay
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
           

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {bike.additional_features ? (
                  Object.entries(bike.additional_features).map(
                    ([key, value], index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600 capitalize">
                          {key}: {value}
                        </span>
                      </li>
                    )
                  )
                ) : (
                  <li className="text-gray-400">
                    No additional features available
                  </li>
                )}
              </ul>
            </div>

            <section aria-labelledby="details-heading" className="mt-10">
              <h2
                id="details-heading"
                className="text-sm font-medium text-gray-900">
                Details
              </h2>
              <p className="mt-4 text-sm text-gray-600">
                {Object.values(bike.additional_features).join(", ")}
              </p>
            </section>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-500">Reviews</span>
          </div>
        </div>
        <div className="mb-6 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-10">
          <section
            aria-labelledby="reviews-heading"
            className="border-t border-gray-200 pt-10 lg:pt-16">
            <h2 id="reviews-heading" className="sr-only">
              Reviews
            </h2>
            <div className="space-y-10">
              {reviews.featured.map((review) => (
                <div key={review.id} className="flex flex-col sm:flex-row">
                  <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review.title}
                    </h3>
                    <p className="sr-only">{review.rating} out of 5 stars</p>
                    <div
                      className="mt-3 space-y-6 text-sm text-gray-600"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                  <div className="order-1 flex items-center sm:flex-col sm:items-start">
                    <img
                      src={review.avatarSrc}
                      alt={`${review.author}'s avatar`}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4 sm:ml-0 sm:mt-4">
                      <p className="text-sm font-medium text-gray-900">
                        {review.author}
                      </p>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      {isModalOpen && selectedBike && (
        <BookNowAndPay BikeData={selectedBike} onClose={handleCloseModal} />
      )}
      <Footer />
    </div>
  );
}
