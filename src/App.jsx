import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./castom.css";
import Header from "./componets/Header";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Projects from "./pages/main/Projects";
import ContactUs from "./pages/main/Contact";
import NotFound from "./pages/main/NotFound";
import { Link } from "react-router-dom";
const navLinks = [
  { name: Home, path: "/" },
  { name: About, path: "about" },
  { name: Projects, path: "projects" },
  { name: ContactUs, path: "contact-us" },
];
function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Header />
        <div className="w-screen">
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
