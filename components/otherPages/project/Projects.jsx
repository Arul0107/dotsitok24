"use client";

import { projectItems } from "@/data/projects";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InView } from "react-intersection-observer";

// Icon mapping based on category
const categoryIcons = {
  "All": "fa-solid fa-th",
  "Technology AI": "fa-solid fa-robot",
  "Technology": "fa-solid fa-laptop-code",
  "ServiceNow": "fa-solid fa-chart-line",
  "Tools": "fa-solid fa-tools",
  "Managemant": "fa-solid fa-graduation-cap",
};

// Get unique categories from projectItems
const allCategories = ["All", ...new Set(projectItems.map(item => item.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === "All"
    ? projectItems
    : projectItems.filter(item => item.category === selectedCategory);

  return (
    <section className="all-project-area mx-auto space-top pb-425">
      <div className="container">
        {/* Gallery Title */}
        <InView triggerOnce threshold={0.5}>
          {({ inView, ref }) => (
            <h2 ref={ref} className={`text-center mb-2 ${inView ? "fadeIn" : ""}`}>
              Filter by Industry
            </h2>
          )}
        </InView>

        <InView triggerOnce threshold={0.5}>
          {({ inView, ref }) => (
            <h5 ref={ref} className={`text-center mb-4 text-gray ${inView ? "fadeIn" : ""}`}>
              <p>Experience a true partnership<br />Delivering an exceptional journey and the finest end product.</p>
            </h5>
          )}
        </InView>

        {/* Filter Buttons with Icons */}
        <div className="filter-buttons mb-4 fadeInUp">
          {allCategories.map((category, index) => (
            <InView triggerOnce key={index} threshold={0.5}>
              {({ inView, ref }) => (
                <button
                  ref={ref}
                  className={`filter-btn ${category === selectedCategory ? "active" : ""} ${inView ? "slideInLeft" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <i className={categoryIcons[category] || "fa-solid fa-folder"}></i> {category}
                </button>
              )}
            </InView>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="row">
          {filteredProjects.map((item, index) => (
            <InView triggerOnce key={index} threshold={0.3}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`col-xl-4 col-md-6 col-12 mb-30 fadeInUp ${inView ? "visible" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="project-card style1 img-shine">
                    <div className="project-img">
                      <Image
                        src={item.imgSrc}
                        width={200}
                        height={200}
                        alt="project image"
                      />
                    </div>
                    <div className="fancy-box style2">
                      <p>{item.category}</p>
                      <h4>
                        <Link scroll={false} href={`/project-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <Link
                        scroll={false}
                        href={`/project-details/${item.id}`}
                        className="arrow-icon"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>

      <style jsx>{`
        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 1rem;
        }
        .filter-btn {
          padding: 10px 20px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: border-bottom 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          border-radius: 0;
          position: relative;
        }
        .filter-btn.active {
          border-bottom: 3px solid #007bff;
          color: #007bff;
        }
        
        /* Animation styles */
        .fadeIn, .fadeInUp, .slideInLeft {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-duration: 0.8s;
          transition: all 0.5s ease;
        }
        .fadeIn {
          animation-name: fadeIn;
        }
        .fadeInUp {
          animation-name: fadeInUp;
        }
        .slideInLeft {
          animation-name: slideInLeft;
        }
        
        /* Keyframes */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .visible {
          opacity: 1;
        }

        /* Typography */
        .text-center {
          text-align: center;
        }
        h2, h5 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem;
          }
          h5 {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
  