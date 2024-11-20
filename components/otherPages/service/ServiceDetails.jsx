"use client";

import { useState, useEffect } from "react";
import { Collapse, Select } from "antd";
import Faq1 from "../faq/Faq1";
import { serviceData } from "@/data/services";

const { Panel } = Collapse;

export default function ServiceDetails() {
  const [isOpen, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceData[0]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 320);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Categorize services by category
  const categorizedServices = serviceData.reduce((acc, item) => {
    if (item.category) {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
    } else {
      acc["uncategorized"] = acc["uncategorized"] || [];
      acc["uncategorized"].push(item);
    }
    return acc;
  }, {});

  return (
    <section className="service-details-section pb-425 fix" style={{ paddingBottom: "24px", paddingTop: "24px" }}>
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row g-4">
            {/* Sidebar for larger screens */}
            {!isMobile && (
              <div className="col-12 col-lg-4 order-1 order-md-1">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget" style={{ padding: 0 }}>
                    <div className="wid-title">
                      <h3>Offerings</h3>
                    </div>
                    <div className="news-widget-categories">
                      <Collapse accordion>
                        {Object.entries(categorizedServices).map(([category, items], index) =>
                          category !== "uncategorized" ? (
                            <Panel header={category} key={index}>
                              <ul style={{ listStyleType: "none", padding: 0 }}>
                                {items.map((item) => (
                                  <li
                                    key={item.label}
                                    className={item.label === selectedService.label ? "service-list-active" : "service-list"}
                                    onClick={() => handleServiceClick(item)}
                                    style={{ background: "white", padding: "0" }}
                                  >
                                    <a
                                      style={{
                                        color: selectedService.label === item.label ? "blue" : "#000",
                                        // textDecoration: selectedService.label === item.label ? "underline" : "none",
                                      }}
                                    >
                                      {item.category_title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </Panel>
                          ) : (
                            <ul key="uncategorized" style={{ listStyleType: "none", padding: 0 }}>
                              {items.map((item) => (
                                <li
                                  key={item.label}
                                  className={item.label === selectedService.label ? "service-list-active" : "service-list"}
                                  onClick={() => handleServiceClick(item)}
                                  style={{ background: "white", padding: "0" }}
                                >
                                  <a
                                    style={{
                                      color: selectedService.label === item.label ? "blue" : "#000",
                                      textDecoration: selectedService.label === item.label ? "underline" : "none",
                                    }}
                                  >
                                    {item.category_title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )
                        )}
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dropdown for mobile screens */}
            {isMobile && (
              <div className="col-12">
                <div className="">
                  <Select
                    value={selectedService.label}
                    onChange={(value) => {
                      const selected = serviceData.find((item) => item.label === value);
                      setSelectedService(selected);
                    }}
                    style={{ width: "100%", borderRadius: "8px" }}
                  >
                    {serviceData.map((item) => (
                      <Select.Option key={item.label} value={item.label}>
                        {item.category_title}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
            )}

            {/* Service Details Content */}
            <div className="col-12 col-lg-8 order-1 order-md-2 servicedesign" style={{ paddingLeft: "20px" }}>
              <div className="service-details-items">
                <div className="details-content">
                  <h3>{selectedService.category_title}</h3>
                  <p className="mt-3 mb-3">{selectedService.category_content}</p>
                  <div
                    className="details-image"
                    style={{
                      backgroundImage: `url(/assets/img/service/${selectedService.category_image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "300px",
                      borderRadius: "18px",
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
