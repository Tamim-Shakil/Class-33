// import { Route, Routes } from "react-router";
// import About from "./pages/About";
// import Contact from "./pages/Contact"
// import Home from "./pages/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./pages/Data";
// import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <Header />
      {/* <Home/> */}
      <Data />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
