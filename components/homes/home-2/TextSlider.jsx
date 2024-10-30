import { textSlides } from "@/data/textSlider";
import React from "react";
import Image from "next/image";

export default function TextSlider() {
  return (
    <div className="textslider-area space">
      <div className="mycustom-marque">
        <div className="scrolling-wrap">
          <div className="textWrapper">
            {textSlides.map((slide, index) => (
              <div
                className={`textWrapper-textslide ${slide.customClass}`}
                key={index}
              >
               {slide.text}
              </div>
            ))}
          </div>
          <div className="textWrapper">
            {textSlides.map((slide, index) => (
              <div
                className={`textWrapper-textslide ${slide.customClass}`}
                key={index}
              > 
                {slide.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
