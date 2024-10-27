"use client";
import Image from "next/image";
import { useState } from "react";
import { serviceCategories } from "@/data/services"; // Adjust the path as necessary
import Faq1 from "../faq/Faq1";
import ModalVideo from "react-modal-video";

export default function   ServiceDetails() {
  const [isOpen, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceCategories[0]); // Default to the first service

  // Handle service selection and update active state
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <section className="service-details-section space-top pb-425 fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <div className="main-sidebar">
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="wid-title">
                      <h3>All Services</h3>
                    </div>
                    <div className="news-widget-categories">
                      <ul>
                        {serviceCategories.map((item, index) => (
                          <li
                            key={index}
                            className={item.label === selectedService.label ? "active" : ""}
                            onClick={() => handleServiceClick(item)}
                          >
                            <a href="#">
                              {item.label}
                              <span>
                                <i className="fa-light fa-arrow-right-long" />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="wid-title">
                      <h3>Opening Hours</h3>
                    </div>
                    <div className="opening-category">
                      <ul>
                        {selectedService.openingHours.map((hour, index) => (
                          <li key={index}>
                            <i className={hour.iconClass} />
                            {hour.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-image bg-cover wow fadeInUp"
                    data-wow-delay="1s"
                    style={{
                      backgroundImage: `url(${selectedService.images[0]})`,
                    }}
                  >
                    <div className="contact-text">
                      <div className="icon">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <h4>{selectedService.contact.title}</h4>
                      <h5>
                        <a href={`tel:${selectedService.contact.phone}`}>
                          {selectedService.contact.phone}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    <Image
                      alt="img"
                      src={selectedService.images[1]}
                      width="450"
                      height="450"
                    />
                  </div>
                  <div className="details-content">
                    <h3 className="wow fadeInUp" data-wow-delay=".6s">
                      {selectedService.title}
                    </h3>
                    {selectedService.description.map((desc, index) => (
                      <p key={index} className="mt-3 wow fadeInUp" data-wow-delay={`${0.9 + index * 0.3}s`}>
                        {desc}
                      </p>
                    ))}

                    <div className="details-video-items wow fadeInUp" data-wow-delay="1.3s">
                      <div className="video-thumb">
                        <Image
                          alt="img"
                          src={selectedService.images[2]}
                          width="405"
                          height="257"
                        />
                        <a
                          onClick={() => setOpen(true)}
                          className="play-btn popup-video"
                        >
                          <i className="fa-sharp fa-solid fa-play" />
                        </a>
                      </div>
                      <div className="content">
                        <h4>Benefits With Our Service</h4>
                        <ul className="list ps-0">
                          {selectedService.benefits.map((benefit, index) => (
                            <li key={index}>
                              <i className="fa-regular fa-circle-check" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="faq-content style-3">
                    <div className="faq-accordion">
                      <Faq1 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="OGABwkJ_23g"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
