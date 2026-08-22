import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import WipAlert from "./components/WipAlert";
import Footer from "./components/Footer";
import ResumePage from "./pages/ResumePage";
import Testing from "./components/Testing";
import QuoteWallPage from "./pages/QuotesPage";

function App() {
  return (
    <HashRouter>
      <WipAlert />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* NOTE: if readding this page, also re-add to Navbar */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/testing" element={<Testing />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/quotewall" element={<QuoteWallPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
