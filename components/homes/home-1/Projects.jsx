"use client";
import { projects1 } from "@/data/projects";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import arrowRight from "../../../public/assets/img/icon/arrowRight.png";
import arrowLeft from "../../../public/assets/img/icon/arrowLeft.png";

const colorArr = [
  "#8bf0ba",
  "#94f0f1",
  "#f2b1d8",
  "#7acfd6",
  "#ffdc6a",
  "#c89666",
  "#f9c5bd",
  "#6B7A8F",
  "#DCC7AA",
  "#c2dde6",
  "#acb7ae",
  "#acddde",
  "#caf1de",
  "#E9FF80",
  "#96C2DB",
  "#E5EDF1",
  "#EFFAFD",
  "#106EBE",
  "#0FFCBE",
  "#178582",
  "#1D63FF",
  "#FFCE32",
  "#A0006D",
];

export default function Projects() {
  const swiperContainerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // Function to load more cards
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    const showArrows = () => {
      const arrows = document.querySelectorAll(".slider-arrow");
      arrows.forEach((arrow) => {
        arrow.style.opacity = "1";
      });
    };

    const swiperContainer = swiperContainerRef.current;
    swiperContainer?.addEventListener("mouseover", showArrows);

    return () => {
      swiperContainer?.removeEventListener("mouseover", showArrows);
    };
  }, []);

  const swiperOptions = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 1000,
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1, centeredSlides: true },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
    modules: [Navigation, Autoplay, Scrollbar],
    navigation: {
      prevEl: ".snbp1",
      nextEl: ".snbn1",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  };

  return (
    <section className="project-area" style={{ position: "relative" }}>
      <div className="projectbgv">
        <div
          className="project-wrap style1 fix"
          style={{ paddingBottom: "150px" }}
          //  style={{backgroundColor:"black",opacity:"0.7"}}
          //style={{ backgroundImage: "url(/assets/img/project/image.png)",backgroundColor:"black",opacity:"0.7",backgroundRepeat:"no-repeat",backgroundSize:"100%" }}
        >
          <div className="container" style={{ maxWidth: "98%" }}>
            <div className="title-wrap mb-50" style={{backgroundColor:"aliceblue",borderLeft:"10px solid #2463cf",paddingLeft:"50px"}}>
              <div className="title-area">
                <h2
                  className="title text-start wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Case Studies
                </h2>
              </div>
            </div>
            <div style={{textAlign:"center"}}>
              {/* <h2>Case Studies</h2> */}
              <div className="card-list">
                {projects1.slice(0, visibleCount).map((study, index) => (
                  <div key={index} className="card">
                    <div
                      className="project-img caseborderleft"
                      style={{
                        backgroundImage: `url(/assets/img/case-studies/image${index+1}.png)`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        borderLeft: `15px solid ${colorArr[index]}`,
                        paddingBottom: "100px",
                        height: "400px",
                        width: "auto",
                      }}
                    ></div>
                    <div style={{ border: "1px solid #ddd", padding: "20px",textAlign:"left"}}>
                      <h4 style={{ paddingTop: "15px", paddingLeft: "15px" }}>
                        {study.title}
                      </h4>
                      <a
                        style={{ paddingLeft: "15px" }}
                        href={`/project-details/${study.id}`}
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {visibleCount < projects1.length && (
                <button onClick={loadMore}>Load More</button>
              )}
              <style jsx>{`
                .casethumb {
                  width: 100%;
                  border-radius: 15px;
                }
                .caseborderleft {
                  // border-left:10px solid #2463cf !important;
                }
                .card-list {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 1rem;
                }
                .card {
                  width: calc(100% / 3 - 1rem); /* Three cards per row */
                  padding: 1rem;
                  border: 0px solid #ddd !important;
                }
                button {
                  margin-top: 1rem;
                  padding: 0.5rem 1rem;
                  background-color: #0070f3;
                  color: white;
                  border: none;
                  border-radius: 5px;
                  cursor: pointer;
                }
                button:hover {
                  background-color: #005bb5;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { useState } from 'react';

// // Sample data for case studies
// const caseStudiesData = [
//   { name: 'Case Study 1', link: '/case-study-1', content: 'Brief description of case study 1...' },
//   { name: 'Case Study 2', link: '/case-study-2', content: 'Brief description of case study 2...' },
//   { name: 'Case Study 3', link: '/case-study-3', content: 'Brief description of case study 3...' },
//   { name: 'Case Study 4', link: '/case-study-4', content: 'Brief description of case study 4...' },
//   { name: 'Case Study 5', link: '/case-study-5', content: 'Brief description of case study 5...' },
//   { name: 'Case Study 6', link: '/case-study-6', content: 'Brief description of case study 6...' },
//   { name: 'Case Study 7', link: '/case-study-7', content: 'Brief description of case study 7...' },
//   { name: 'Case Study 8', link: '/case-study-8', content: 'Brief description of case study 8...' },
//   { name: 'Case Study 9', link: '/case-study-9', content: 'Brief description of case study 9...' },
//   { name: 'Case Study 10', link: '/case-study-10', content: 'Brief description of case study 10...' },
//   // Add more as needed
// ];

// export default function CaseStudies() {
//   const [visibleCount, setVisibleCount] = useState(5);

//   // Function to load more cards
//   const loadMore = () => {
//     setVisibleCount(prevCount => prevCount + 5);
//   };

//   return (
//     <div>
//       <h2>Case Studies</h2>
//       <div className="card-list">
//         {caseStudiesData.slice(0, visibleCount).map((study, index) => (
//           <div key={index} className="card">
//             <h3>{study.name}</h3>
//             <p>{study.content}</p>
//             <a href={study.link} target="_blank" rel="noopener noreferrer">Read More</a>
//           </div>
//         ))}
//       </div>
//       {visibleCount < caseStudiesData.length && (
//         <button onClick={loadMore}>Load More</button>
//       )}
//       <style jsx>{`
//         .card-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//         }
//         .card {
//           width: calc(100% / 2 - 1rem); /* Two cards per row */
//           padding: 1rem;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           box-shadow: 0 2px 5px rgba(0,0,0,0.1);
//         }
//         button {
//           margin-top: 1rem;
//           padding: 0.5rem 1rem;
//           background-color: #0070f3;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         button:hover {
//           background-color: #005bb5;
//         }
//       `}</style>
//     </div>
//   );
// }
