import { useEffect } from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import TrustedUserValue from "./TrustedUserValue";
import Testimonials from "./Testimonials";
import OurOffice from "./OurOffice";
import OurTeam from "./OurTeam";
import FaqSection from "./FaqSection";
import FeaturesBike from "./FeaturesBike";
import "aos/dist/aos.css";
import AOS from "aos"; // Import AOS JS

const navigation = [
  { name: "Home", href: "/" },
  { name: "Bikes", href: "#Bike" },
  { name: "Review", href: "#Review" },
  { name: "About Us", href: "#AboutUs" },
  { name: "Company", href: "#Company" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src="https://i.ibb.co/pwXGxFY/logo-no-background.png"
                alt="LOGo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/Login"
              className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://i.ibb.co/pwXGxFY/logo-no-background.png"
                  alt="LOGo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/Login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-10">
        <img
          src="https://res.cloudinary.com/dymnilfcs/image/upload/v1724301025/gvu1y1ejw28k1uswj4os.jpg"
          alt="bg image"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-7">
              Explore New Destinations with Your Perfect Ride
            </h1>

            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <form className="mt-5 sm:flex sm:items-center">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="destination" className="sr-only">
                      Where to go?
                    </label>
                    <select
                      name="destination"
                      id="destination"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="" disabled selected>
                        Select Destination
                      </option>
                      <option value="scenic-routes">Scenic Routes</option>
                      <option value="off-road-trails">Off-Road Trails</option>
                      <option value="long-distance-rides">
                        Long Distance Rides
                      </option>
                    </select>
                  </div>

                  {/* Bike CC Option */}
                  <div className="w-full sm:max-w-xs mt-3 sm:mt-0 sm:ml-3">
                    <label htmlFor="bike-cc" className="sr-only">
                      Bike CC
                    </label>
                    <select
                      name="bike-cc"
                      id="bike-cc"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="" disabled selected>
                        Select Bike Type
                      </option>
                      <option value="100-150cc">100-150cc</option>
                      <option value="150-250cc">150-250cc</option>
                      <option value="250-500cc">250-500cc</option>
                      <option value="500cc-plus">500cc and above</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className=" mt-3 inline-flex w-10 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-20">
                    <MagnifyingGlassIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div id="Bike" data-aos="fade-up">
        <FeaturesBike />
      </div>
      <div>
        <TrustedUserValue />
      </div>
      <div id="Review" data-aos="zoom-in">
        <Testimonials />
      </div>
      <div id="Company" data-aos="zoom-in-up">
        <OurOffice />
      </div>
      <div id="AboutUs" data-aos="zoom-in-right">
        <OurTeam />
      </div>
      <FaqSection />
      <Footer />
    </div>
  );
}
