
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Landing Page/Navbar";

const App = () => {

   
    return (
      <div>
        <Navbar></Navbar>

      
     
        <Outlet></Outlet>
      </div>
    );
};

export default App;
