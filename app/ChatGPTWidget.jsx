// components/ChatGPTWidget.js
"use client";

import { useState, useEffect } from "react";

export default function ChatGPTWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleChat = () => {
    if (isOpen) {
      // Start closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 500); // Match with the animation duration
    } else {
      setIsOpen(true);
    }
  };

  // Close chat if clicked outside the widget
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".chatgpt-widget-container")) {
        toggleChat();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Button to toggle the chat widget */}
      <div
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {/* Rotating text around the button */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            animation: "rotate 6s linear infinite",
          }}
        >
          <p
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              fontSize: "12px",
              color: "#304eff",
              whiteSpace: "nowrap",
            }}
          >
          </p>
        </div>

        {/* Image inside the button */}
        <img
          src="/assets/img/icon/bot.png" // Replace with actual image path
          alt="Chat Icon"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            border: "4px solid #304eff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* ChatGPT iframe with slide-in/out animation */}
      {isOpen && (
        <div
          className={`chatgpt-widget-container ${
            isAnimating ? "slide-out" : "slide-in"
          }`}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "320px",
            height: "400px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
            backgroundColor: "#fff",
          }}
        >
          <iframe
            title="dotsito ChatGPT"
            src="https://sdv5chee9fa9g098c826q.ai.copilot.live" // Replace with the actual ChatGPT URL
            style={{ border: "none", width: "100%", height: "100%" }}
            loading="lazy"
            allow="microphone; camera; speaker; clipboard-read; clipboard-write; geolocation;"
          ></iframe>
        </div>
      )}

      {/* CSS for animation and mobile responsiveness */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .chatgpt-widget-container {
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }

        .slide-in {
          animation-name: slideIn;
        }

        .slide-out {
          animation-name: slideOut;
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 600px) {
          .chatgpt-widget-container {
            width: 90%;
            height: 75%;
            bottom: 50px;
            right: 5%;
            border-radius: 12px;
          }
          div[style*="width: 60px; height: 60px;"] {
            width: 50px !important;
            height: 50px !important;
            bottom: 15px;
            right: 10px;
          }
        }
      `}</style>
    </>
  );
}
