import {
  Navbar,
  Footer,
  Home,
  Benefits,
  OurClasses,
  ContactUs,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={Home} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
