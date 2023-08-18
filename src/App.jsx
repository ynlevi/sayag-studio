import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./castom.css";
import Header from "./componets/Header";
import Photos from "./pages/main/Photos";
import Videos from "./pages/main/Videos";
import About from "./pages/main/About";
import ContactUs from "./pages/main/Contact";
import NotFound from "./pages/main/NotFound";
import Footer from "./componets/Footer";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Navigate } from "react-router-dom";

const navLinks = [
  { name: Photos, path: "photos" },
  { name: Videos, path: "videos" },
  { name: About, path: "about" },
  { name: ContactUs, path: "contact-us" },
];

function App() {
  const primaryRef = useRef(null);
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <Header primaryRef={primaryRef} />
        <div className="w-screen md:w-full " ref={primaryRef} dir="auto">
          <Routes>
            {navLinks.map((elm, i) => (
              <Route key={i} exact path={elm.path} Component={elm.name} />
            ))}

            <Route path="/" element={<Navigate to="/photos" />} />
            <Route exact={true} path="*" Component={NotFound} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
