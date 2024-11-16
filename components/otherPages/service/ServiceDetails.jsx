"use client";

import { useState, useEffect } from "react";
import { serviceData } from "@/data/services"; 
import Faq1 from "../faq/Faq1";

export default function ServiceDetails() {
  const [isOpen, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceData[0]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  

  return (
    <section className="service-details-section pb-425 fix" style={{paddingBottom: '24px', paddingTop: '24px'}}>
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row g-4">
            {/* Sidebar for larger screens */}
            {!isMobile && (
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Category</h3>
                    </div>
                    <div className="news-widget-categories">
                      <ul>
                        {serviceData.map((item, index) => (
                          <li
                            key={index}
                            className={item.label === selectedService.label ? "active" : ""}
                            onClick={() => handleServiceClick(item)}
                          >
                            <a>
                              {item.category_title}
                              <span>
                                <i className="fa-light fa-arrow-right-long" />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dropdown for mobile screens */}
            {isMobile && (
              <div className="col-12">
                <div className="mobile-dropdown">
                  <label htmlFor="serviceSelect">Select Category:</label>
                  <select
                    id="serviceSelect"
                    value={selectedService.category_title}
                    onChange={(e) => {
                      const selected = serviceData.find((item) => item.category_title === e.target.value);
                      setSelectedService(selected);
                    }}
                  >
                    {serviceData.map((item) => (
                      <option key={item} value={item.category_title}>
                        {item.category_title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="col-12 col-lg-8 order-1 order-md-2 servicedesign" style={{paddingLeft: '20px'}}>
              <div className="service-details-items">
                <div className="details-content">
                  <h3>{selectedService.category_title}</h3>
                  <p className="mt-3">{selectedService.category_content}</p>
                  <div
                    className="details-image"
                    style={{
                      backgroundImage: `url(/assets/img/service/${selectedService.category_image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      height: "300px",
                      borderRadius: "25px",
                    }}
                  ></div>
                  <div className="details-video-items">
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
                    <Faq1 serviceDetails={selectedService} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
