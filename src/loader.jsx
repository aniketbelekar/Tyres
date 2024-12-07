import React, { useState, useEffect } from "react";
import "./Loader.css"; // Ensure this CSS file is available

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3-second delay
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Remove loader after the timeout

  return (
    <div className="loader-container">
      {/* Replace the spinner with an image */}
      <img 
        src="src/tyre.gif" 
        alt="Loading..." 
        className="loading-image"
      />
    </div>
  );
};

export default Loader;
