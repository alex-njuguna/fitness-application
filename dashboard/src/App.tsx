import { Navbar } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>{/* <Route path='/' element={}/> */}</Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
