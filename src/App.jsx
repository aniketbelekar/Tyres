import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorBoundary from "./Errorboundary"; // Error Boundary
import Loader from "./Components/Loader"; // Custom loader with image

// Lazy load the components
const Home = lazy(() => import("./Components/Home"));
const Services = lazy(() => import("./Components/Services"));
const Brands = lazy(() => import("./Components/Brand"));
const ExperienceAndClients = lazy(() => import("./Components/Experience"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const ContactUs = lazy(() => import("./Components/Contactsus"));
const Product = lazy(() => import("./Components/Products"));
const AboutUs = lazy(() => import("./Components/Aboutus"));
const TyreSelector = lazy(() => import("./TyreSelector"));
const ProductDetails = lazy(() => import("./Components/ProductDetail"));
const BookingAppointment = lazy(() => import("./Components/bookingappoinment"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <RoutesWithLoader />
      <Footer />
    </Router>
  );
}

// This is the component where useLocation() is used
function RoutesWithLoader() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Correct placement of useLocation()

  useEffect(() => {
    setLoading(true); // Trigger loading when route changes
    const timer = setTimeout(() => setLoading(false), 500); // Hide loader after 3 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]); // Dependency on location, triggers on route change

  return (
    <ErrorBoundary>
      {loading ? (
        <Loader /> // Show loader if loading state is true
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <Brands />
                  <TyreSelector />
                  <ExperienceAndClients />
                  <Testimonials />
                </>
              }
            />
            <Route path="/products" element={<Product />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/booking" element={<BookingAppointment />} />
          </Routes>
        </Suspense>
      )}
    </ErrorBoundary>
  );
}

export default App;
