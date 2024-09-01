import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { useGetAllRentalBikeInfoQuery } from "../../redux/api/Coustomer API Management/getAllRentalBike";

export default function Count() {
    const { data } = useGetAllRentalBikeInfoQuery(undefined);
    console.log(data);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const [totalBookings, setTotalBookings] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (data?.data?.bookings) {
      const bookingsCount = data.data.bookings.length;
      const returnsCount = data.data.bookings.filter(
        (b: { isReturned: any; }) => b.isReturned
      ).length;
      const costSum = data.data.bookings.reduce(
        (acc: any, booking: { totalCost: any; }) => acc + booking.totalCost,
        0
      );

      setTotalBookings(bookingsCount);
      setTotalReturns(returnsCount);
      setTotalCost(costSum);
    }
  }, [data]);

  return (
    <div className="bg-white py-24 sm:py-10" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Rental Statistics
          </h2>
          <p className="mt-5 mb-10 text-lg leading-8 text-gray-600">
            Here’s a summary of your rental activity. Check out your stats
            below!
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Total Rentals</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {isVisible && (
                <CountUp start={0} end={totalBookings} duration={5} />
              )}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Total Returns</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {isVisible && (
                <CountUp start={0} end={totalReturns} duration={5} />
              )}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Total Expenditure
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {isVisible && (
                <CountUp start={0} end={totalCost} duration={5} prefix="৳" />
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
