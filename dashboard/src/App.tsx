import {
  Navbar,
  Footer,
  Home,
  Benefits,
  OurClasses,
  ContactUs,
  SignIn,
  SignUp,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="benefits/" element={<Benefits />} />
            <Route path="classes/" element={<OurClasses />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="signin/" element={<SignIn />} />
            <Route path="signup/" element={<SignUp />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
