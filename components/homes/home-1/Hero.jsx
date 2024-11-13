"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { slidesData } from "@/data/heroSlides";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-1" id="hero10" style={{width:"100%"}}>
      <Swiper
        className="swiper gt-slider hero-slider1 swiper-fade swiper-initialized swiper-horizontal swiper-autoheight swiper-watch-progress swiper-backface-hidden"
        id="heroSlide1"
        modules={[EffectFade]}
        effect="fade"
        autoHeight
      >
        {slidesData.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <div className="hero-inner">
            
              <div
                className="gt-hero-bg hero-color-bg"  style={{ backgroundImage: `url(${slide.bgSrc})` }}
                >
                </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-8" style={{width:"98%"}}>
                    <div className="hero-style1" style={{width:"98%"}}>
                     
                      <h1 className="hero-title text-white">
                        <span className="title1">{slide.title1}</span>
                        <span className="title2">{slide.title2}</span>
                      </h1>
                     
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        {slide.text}
                      </p>
                      <Link
                        scroll={false}
                        href={`/contact`}
                        className="gt-btn gt-btn-icon"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        EXPLORE MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {slidesData.map((slide) => (

<div className="hero-sub-title">
 <h2
 className="title2" style={{width:"60%",marginLeft:"20%",marginRight:"20%",fontSize:"40px",color:"#393f4d",lineHeight:"2",textAlign:"center",marginBottom:"50px",marginTop:"50px",fontWeight:"600",textTransform:"capitalize"}}
 data-ani="slideindown"
 data-ani-delay="0.2s"
>
 {slide.subtitle}
</h2>
</div>
      ))}
    </section>
  );
}
