"use client";
import { projects1 } from "@/data/projects";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Projects() {
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

  return (
    <section className="project-area" style={{ position: "relative" }}>
      <div
        className="project-wrap style1 space fix"
        style={{ backgroundImage: "url(/assets/img/bg/portfolioBg1_1.png)" }}
      >
        <div className="container">
          <div className="title-wrap mb-50">
            <div className="title-area">
              <h6
                className="text-start text-white wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="me-1">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIconWhite.png"
                    width="28"
                    height="12"
                  />
                </span>
                Recently Work
                <span className="ms-1">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIconWhite.png"
                    width="28"
                    height="12"
                  />
                </span>
              </h6>
              <h2
                className="title text-start text-white wow fadeInUp"
                data-wow-delay=".6s"
              >
                Latest Projects & Services by Dotsito
              </h2>
            </div>
            <div
              className="arrow-btn text-end wow fadeInUp"
              data-wow-delay=".9s"
              ref={swiperContainerRef}
            >
              <button className="slider-arrow style2 snbp1">
                <Image
                  alt="img"
                  src="/assets/img/icon/arrowLeft.png"
                  width="20"
                  height="20"
                />
              </button>
              <button className="slider-arrow style2 slider-next snbn1">
                <Image
                  alt="img"
                  src="/assets/img/icon/arrowRight.png"
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="slider-area project-slider1 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Swiper
              className="swiper gt-slider"
              id="projectSlider1"
              {...swiperOptions}
            >
              {projects1.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <div className="project-card style1 img-shine">
                    <div className="project-img">
                      <Image
                        src={slide.imgSrc}
                        width={465}
                        height={450}
                        alt="project image"
                      />
                    </div>
                    <div className="fancy-box style2">
                      <p>{slide.category}</p>
                      <h4>
                        <Link
                          scroll={false}
                          href={`/project`}
                        >
                          {slide.title}
                        </Link>
                      </h4>
                      <Link
                        scroll={false}
                        href={`/project`}
                        className="arrow-icon"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-scrollbar"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
