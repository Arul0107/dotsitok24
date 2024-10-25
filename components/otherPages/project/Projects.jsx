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
        <h2 className="text-center mb-2 fadeIn">Filter by Industry</h2>
        <h5 className="text-center mb-4 text-gray fadeIn">
          You will find yourself working in a true partnership that results in an incredible
          experience and an end product that is the best.
        </h5>

        {/* Filter Buttons with Icons */}
        <div className="filter-buttons mb-4 fadeInUp">
          {allCategories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${category === selectedCategory ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              <i className={categoryIcons[category] || "fa-solid fa-folder"}></i> {category}
            </button>
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
                        width={450}
                        height={450}
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
          background-color: #f5f5f5;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          border-radius: 8px;
        }
        .filter-btn.active {
          background-color: #007bff;
          color: white;
        }
        .filter-btn:hover {
          background-color: #007bff;
          color: white;
        }
        .text-center {
          text-align: center;
        }
        h2, h5 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .fadeIn, .fadeInUp {
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
        .visible {
          opacity: 1;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
