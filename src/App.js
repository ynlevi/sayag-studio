import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./castom.css";

import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import RestaurantA from "./pages/main/RestA";
import RestaurantB from "./pages/main/RestB";
import Catering from "./pages/main/Catring";
import ContactUs from "./pages/main/Contact";
import NotFound from "./pages/main/NotFound";

const navLinks = [
  { name: Home, path: "/" },
  { name: About, path: "about" },
  { name: RestaurantA, path: "restaurant-a" },
  { name: RestaurantB, path: "restaurant-b" },
  { name: Catering, path: "catering" },
  { name: ContactUs, path: "contact-us" },
];
function App() {
  return (
    <>
      <Header />
      <Routes>
        {navLinks.map((elm) => (
          <Route exact path={elm.path} Component={elm.name} />
        ))}
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
