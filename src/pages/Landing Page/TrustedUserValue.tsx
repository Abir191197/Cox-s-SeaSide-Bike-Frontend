import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { id: 1, name: "Bikes available for rent", value: 1500, suffix: "+" },
  { id: 2, name: "Daily rentals", value: 5000, suffix: "+" },
  { id: 3, name: "Satisfied customers", value: 12000, suffix: "+" },
  { id: 4, name: "Years in service", value: 5, suffix: "Years" },
];

export default function TrustedUserValue() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust this value as needed
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

  return (
    <div className="bg-white py-24 sm:py-10" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Riders Worldwide
          </h2>
          <p className="mt-5 mb-10 text-lg leading-8 text-gray-600">
            Explore our extensive bike rental options and join thousands of
            satisfied riders.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {isVisible && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={5}
                    suffix={stat.suffix || ""}
                  />
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
