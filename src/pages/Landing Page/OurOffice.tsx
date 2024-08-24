export default function OurOffice() {
  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Our Offices
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our offices are located in key cities across Bangladesh, offering
            local support and services to our customers.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Dhaka
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>123 Green Road</p>
              <p>Dhaka 1212</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Chittagong
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>456 Agrabad</p>
              <p>Chittagong 4100</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Sylhet
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>789 Zindabazar</p>
              <p>Sylhet 3100</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Khulna
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>101 Rupsha</p>
              <p>Khulna 9000</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
