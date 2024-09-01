import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { useGETAllRentalBikesQuery } from "../../redux/api/Admin API Management/AllRentals";

export default function CountGraph() {
  const { data } = useGETAllRentalBikesQuery(undefined);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Define state for various metrics
  const [totalRentals, setTotalRentals] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalPending, setTotalPending] = useState(0);
  const [waitingForReturn, setWaitingForReturn] = useState(0);

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
    if (data?.data) {
      const rentals = data.data;
      const rentalsCount = rentals.length;
      const returnsCount = rentals.filter(
        (r: { isReturned: boolean }) => r.isReturned
      ).length;
      const waitingCount = rentals.filter(
        (r: { returnTime: string | null }) => !r.returnTime
      ).length;
     
      const paidSum = rentals
        .filter(
          (r: { totalCostPayment: string }) => r.totalCostPayment === "Paid"
        )
        .reduce(
          (acc: number, rental: { totalCost: number }) =>
            acc + rental.totalCost,
          0
        );
      const pendingSum = rentals
        .filter(
          (r: { totalCostPayment: string }) => r.totalCostPayment === "Pending"
        )
        .reduce(
          (acc: number, rental: { totalCost: number }) =>
            acc + rental.totalCost,
          0
        );

      setTotalRentals(rentalsCount);
      setTotalReturns(returnsCount);
      setWaitingForReturn(waitingCount);
      setTotalPaid(paidSum);
      setTotalPending(pendingSum);
    }
  }, [data]);

  return (
    <div className="bg-white py-24 sm:py-10" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rental Statistics Overview
          </h2>
          <p className="mt-5 mb-10 text-lg leading-8 text-gray-600">
            An overview of the rental statistics, including total rentals,
            returns, and financial metrics.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Total Rentals</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {isVisible && (
                <CountUp start={0} end={totalRentals} duration={5} />
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
              Waiting for Return Bike
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {isVisible && (
                <CountUp start={0} end={waitingForReturn} duration={5} />
              )}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Total Earning Total Pending Amount
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {isVisible && (
                <CountUp start={0} end={totalPaid} duration={5} prefix="৳" />
              )}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Total Pending Amount
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {isVisible && (
                <CountUp start={0} end={totalPending} duration={5} prefix="৳" />
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
