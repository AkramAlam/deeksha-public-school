import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ManagementPage from "./pages/ManagementPage";
import GalleryPage from "./pages/GalleryPage";
import StudentCornerPage from "./pages/StudentCornerPage";
import ContactPage from "./pages/ContactPage";
import EnrollPage from "./pages/EnrollPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import MediaCoveragePage from "./pages/MediaCoveragePage";
import StaffDetailsPage from "./pages/StaffDetailsPage";
import ResultsPage from "./pages/ResultsPage";
import FeeStructurePage from "./pages/FeeStructurePage";
import HolidayHomeworkPage from "./pages/HolidayHomeworkPage";
import MandatoryDisclosurePage from "./pages/MandatoryDisclosurePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/student-corner" element={<StudentCornerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/media-coverage" element={<MediaCoveragePage />} />
            <Route path="/staff-details" element={<StaffDetailsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/fee-structure" element={<FeeStructurePage />} />
            <Route path="/holiday-homework" element={<HolidayHomeworkPage />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <AppContent />;
}