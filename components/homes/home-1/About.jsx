    "use client";
    import { fancyBoxes } from "@/data/features";
    import Link from "next/link";
    import Image from "next/image";
    import ModalVideo from "react-modal-video";
    import { useState } from "react";
    import { Padding } from "maplibre-gl";

    export default function About() {
      const [isOpen, setOpen] = useState(false);
      return (
        <>
          <section className="about-area fix position-relative" style={{background: "url(/assets/img/credible1/teamwork.webp) no-repeat center center fixed",}}>
          <div className="about-inner">
            <div className="about-wrap style1">
              
            <div className="shape1_1 d-xl-block d-none">
                <Image
                  alt="shape"
                  src="/assets/img/shape/aboutShape1_1.png"
                  width="270"
                  height="733"
                />
              </div>
            <div className="shape1_2 movingX d-xl-block d-none">
                <Image
                  alt="shape"
                  src="/assets/img/shape/aboutShape1_2.png"
                  width="188"
                  height="275"
                />
              </div> 
              <div className="container">
                <div className="about-wrapper style1">
                  <div
                    className="about-content wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    <div className="title-area">
                      <h5 className="subtitle text-start">
                        <span>
                        </span>                        
                        <span>
                        </span>
                      </h5>
                      <h3 className="title text-start">
                      We enhance Business Value
                      </h3>
                      <div
                    className="about-thumb-box wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                  
                    <div className="about-thumb-box counter-box style1 movingX">
                      <div className="about-thumb-box counter-box_icon">
                        <Image
                          alt="icon"
                          src="/assets/img/icon/aboutIcon1_1.png"
                          width="52"
                          height="52"
                        />
                      </div>
                      <div className="about-thumb-box counter-box_counter">
                        <div>
                          <span className="counter-number">100</span>
                          <span className="plus">+</span>
                        </div>
                        <span>Satisfied Clients</span>
                      </div>
                    </div>
                    <div className="about-thumb-box line aboutus line jump d-none d-sm-block" />
                  </div>
                      <p style={{paddingTop: '50px'}}>
                      We deliver IT services and consulting that empower businesses to embrace change, boost efficiency, and drive sustainable growth, envisioning a world where technology enables organizations to thrive and lead.
                       </p>
                    </div>
                    {/* <div className="fancy-box-wrapper">
                      {fancyBoxes.map((box, index) => (
                        <div className="fancy-box style1" key={index}>
                          
                          <div className="fancy-box_content">
                            <h4>{box.title}</h4>
                            <span>{box.description}</span>
                          </div>
                        </div>
                      ))}
                    </div> */}
                    <div className="profile-wrapper">
                      <Link
                        scroll={false}
                        href={`/contact`}
                        className="gt-btn gt-btn-icon"
                      >
                        GET IN TOUCH
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>{" "}
        </>
      );
    }
