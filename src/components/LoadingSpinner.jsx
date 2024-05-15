import "./LoadingSpinner.css";
import { useEffect, useState } from "react";

const LoadingSpinner = (prop) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      {isVisible && (
        <div
          className={`loading-spinner-container ${
            prop.ElementsLoaded == true ? "" : ""
          }`}
        >
          <div className={`loader`}></div>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
