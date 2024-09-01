export default function CouponBanner() {
  return (
    <div className="flex items-center justify-between bg-blue-300 px-6 py-3">
      <p className="text-sm text-black">
        <a href="#" className="flex items-center">
          <strong className="font-semibold">Bike Rental Summer Deal!</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Enjoy 20% off all bike rentals from August 1 – 15. Book now and hit
          the road with style!&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        {/* Optionally, add an icon or additional content here */}
      </div>
    </div>
  );
}
