import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Landing Page/Navbar";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS JS

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
