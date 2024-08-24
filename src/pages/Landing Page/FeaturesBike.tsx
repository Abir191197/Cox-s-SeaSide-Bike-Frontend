
const products = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
  },
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
  },
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
  },
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
  },
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
  },
  // Add more products as needed
];

export default function FeaturesBike() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:mx-auto lg:max-w-full lg:px-8">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending Bikes
        </h2>
        <a
          href="#"
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="mt-8 -mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <div
            key={product.id}
            className=" bg-white rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-fill h-50 rounded-t-lg overflow-hidden">
           
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-gray-900">
                <a href={product.href}>{product.name}</a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-2 text-xl font-semibold text-gray-900">
                {product.price}
              </p>
              <div className="mt-4 flex justify-between space-x-4">
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-500 transition-colors duration-200">
                  Book Now
                </button>
                <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-colors duration-200">
                  Overview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center px-4 sm:hidden">
        <a
          href="#"
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
