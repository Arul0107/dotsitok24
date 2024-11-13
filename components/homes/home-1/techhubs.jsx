"use client";
import { techhubs1 } from "@/data/techhubs";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import arrowRight from "../../../public/assets/img/icon/arrowRight.png"
import arrowLeft from "../../../public/assets/img/icon/arrowLeft.png"

const colorArr=["#8bf0ba","#94f0f1","#f2b1d8","#7acfd6","#ffdc6a","#c89666","#f9c5bd","#6B7A8F","#DCC7AA","#c2dde6","#acb7ae","#acddde","#caf1de","#E9FF80","#96C2DB","#E5EDF1","#EFFAFD","#106EBE","#0FFCBE","#178582","#1D63FF","#FFCE32","#A0006D"];


export default function techhubs() {
  const swiperContainerRef = useRef(null);

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
  const colorArr=["#8bf0ba","#94f0f1","#f2b1d8","#7acfd6","#ffdc6a","#c89666","#f9c5bd","#6B7A8F","#DCC7AA","#c2dde6","#acb7ae","#acddde","#caf1de","#E9FF80","#96C2DB","#E5EDF1","#EFFAFD","#106EBE","#0FFCBE","#178582","#1D63FF","#FFCE32","#A0006D"];

  return (
    <section className="project-area" style={{ position: "relative" }}>
      <div className="">
      <div
        className="project-wrap style1 techhubbottom  fix"
      // style={{backgroundColor:"cadetblue",opacity:"0.7"}}
        // style={{ backgroundImage: "url(/assets/img/project/image.png)",backgroundColor:"black",opacity:"0.7",backgroundRepeat:"no-repeat",backgroundSize:"100%" }}
      >
        <div className="container" style={{maxWidth:"98%"}}>
        <div className="title-wrap mb-50" style={{backgroundColor:"aliceblue",borderLeft:"10px solid #2463cf",paddingLeft:"50px"}}>
            <div className="title-area">
              <h2
                className="title text-start wow fadeInUp"
                data-wow-delay=".6s"
                color="black !important"
              >
                Digital Technology HUB
              </h2>
            </div>

          </div>
          <div
            className="slider-area project-slider1 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Swiper
              className="swiper gt-slider" 
              id="projectSlider1"
              {...swiperOptions}
            >
              {techhubs1.map((slide) => (
                <SwiperSlide className="swiper-slide swiperleft" key={slide.id} >
                  <div className="project-card img-shine" style={{backgroundColor:"white",borderRadius:"15px",opacity:"1",padding:"20px"}}>
                  <div style={{height:"150px",textAlign:"center"}}>
                    { <Image
                  alt="img"
                   src={slide.imgSrc}
                   width="200"
                  height="150" style={{paddingBottom:"20px"}}
                />                     }
                </div>
                {/* <br></br>
                      <p>{slide.title}</p> */}
                    { <p style={{textAlign:"justify"}}>{slide.overview}</p> }
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-scrollbar"></div>
            </Swiper>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
