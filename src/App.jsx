import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Testing from "./pages/Testing";
import WipAlert from "./components/WipAlert";
import Footer from "./components/Footer";
import CareerPage from "./pages/CareerPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <>
      <WipAlert />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* NOTE: if readding this page, also re-add to Navbar */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/career" element={<CareerPage />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/resume" element={<ResumePage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
