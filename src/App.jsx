import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WipAlert from "./components/WipAlert";
import Footer from "./components/Footer";
import CareerPage from "./pages/CareerPage";
import Testing from "./components/Testing";
import QuoteWallPage from "./pages/QuotesPage";
import PhrasesProvider from "./components/PhrasesProvider";

function App() {
  return (
    <PhrasesProvider>
      <HashRouter>
        <WipAlert />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* NOTE: if readding this page, also re-add to Navbar */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/testing" element={<Testing />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/quotewall" element={<QuoteWallPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </PhrasesProvider>
  );
}

export default App;
