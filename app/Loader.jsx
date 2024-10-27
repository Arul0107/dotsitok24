"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter

export default function Loader({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Start loading animation on route change
    setLoading(true);
    
    // Simulate loading completion
    const timer = setTimeout(() => setLoading(false), 1200); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="content-loading-container">
            <span className="loading-square loading-square-1"></span>
            <span className="loading-square loading-square-2"></span>
            <span className="loading-square loading-square-3"></span>
            <span className="loading-square loading-square-4"></span>
          </div>
          <div className="brand-name">Dotsito Technologies</div>

        </div>
      )}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>{children}</div>

      <style jsx>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        
        .content-loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transform: rotate(45deg);
        }

        .brand-name {
          position: absolute;
          color: #7E5EB9;
          font-size: 1.5rem;
          font-weight: bold;
          transform: rotate(-45deg); /* Undo container rotation */
          animation: fadeInText 1s ease-in-out infinite alternate;
        }

        .loading-square {
          width: 16px;
          height: 16px;
          position: absolute;
          background-color: #7E5EB9;
          animation: rotateSquare 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
        }

        .loading-square-1 { top: -24px; left: 24px; }
        .loading-square-2 { top: 24px; left: 24px; animation-delay: 0.2s; }
        .loading-square-3 { top: 24px; left: -24px; animation-delay: 0.4s; }
        .loading-square-4 { top: -24px; left: -24px; animation-delay: 0.6s; }

        @keyframes rotateSquare {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.5); opacity: 0.3; }
        }

        @keyframes fadeInText {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
