import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./castom.css";
import Header from "./componets/Header";
import Photos from "./pages/main/Photos";
import Videos from "./pages/main/Videos";
import About from "./pages/main/About";
import ContactUs from "./pages/main/Contact";
import NotFound from "./pages/main/NotFound";
import { Link } from "react-router-dom";
import { useRef } from "react";
const navLinks = [
  { name: Photos, path: "/" },
  { name: Videos, path: "videos" },
  { name: About, path: "about" },
  { name: ContactUs, path: "contact-us" },
];

function App() {
  const primaryRef = useRef(null);
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Header primaryRef={primaryRef} />
        <div className="w-screen" ref={primaryRef}>
          <Routes>
            {navLinks.map((elm, i) => (
              <Route key={i} exact path={elm.path} Component={elm.name} />
            ))}
            <Route exact={true} path="*" Component={NotFound} />
          </Routes>

          {/* footer */}
        </div>
      </div>
    </>
  );
}
export default App;
