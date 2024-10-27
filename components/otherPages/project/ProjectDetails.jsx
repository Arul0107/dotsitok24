import React from "react";
import Image from "next/image";
import TextSlider from "@/components/homes/home-2/TextSlider";

export default function ProjectDetails({ projectItem }) {
  return (
    <section className="Project-details-section fix space-top pb-425">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <TextSlider/>
              <div className="project-details-items">
                {/* Project Image */}
                <div
                  className="details-image wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    alt="img"
                    src={projectItem.imgSrc}
                    width="450"
                    height="450"
                  />
                </div>

                {/* Project Title and Description */}
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-7">
                    <div className="details-content pt-5">
                      <h3 className="wow fadeInUp" data-wow-delay=".6s">
                        {projectItem.title}
                      </h3>
                      <p className="wow fadeInUp" data-wow-delay=".9s">
                        {projectItem.description ||
                          "Default description for the project. This text can be dynamically replaced based on the project data."}
                      </p>
                      <h4 className="wow fadeInUp" data-wow-delay="1.2s">
                        <a
                          href={projectItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0070f3", fontWeight: "bold" }}
                        >
                          Know more...
                        </a>
                      </h4>{" "}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="col-lg-4">
                    <div
                      className="project-catagory wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <h3>Project Info:</h3>
                      <ul>
                        <li>
                          Client:{" "}
                          <span>{projectItem.client || "Default Client"}</span>
                        </li>
                        <li>
                          Category:{" "}
                          <span>
                            {projectItem.category || "Default Category"}
                          </span>
                        </li>
                        <li>
                          Location:{" "}
                          <span>
                            {projectItem.location || "Default Location"}
                          </span>
                        </li>
                        <li>
                          Share:
                          <span>
                            <i className="fa-brands fa-facebook-f me-3" />
                            <i className="fa-brands fa-instagram me-3" />
                            <i className="fa-brands fa-linkedin-in" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Challenge Section */}
                <div
                  className="details-content pt-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h3>Our Challenge</h3>
                  <p>
                    {projectItem.challenge ||
                      "Default challenge description for the project. Customize this based on the JSON data."}
                  </p>
                </div>

                {/* Features List */}
                <div className="row g-4 pt-5">
                  {projectItem.features?.map((feature, index) => (
                    <div key={index} className="col-lg-3 col-md-6">
                      <ul
                        className="list wow fadeInUp"
                        data-wow-delay={`${1.2 + index * 0.2}s`}
                      >
                        {feature.items.map((item, i) => (
                          <li key={i}>
                            <i className="fa-regular fa-circle-check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Result Section */}
                <div
                  className="details-content pt-5 wow fadeInUp"
                  data-wow-delay="1.9s"
                >
                  <h3>The Result of Project</h3>
                  <p>
                    {projectItem.result ||
                      "Default result description for the project. Customize this based on the JSON data."}
                  </p>
                </div>

                {/* Additional Images */}
                <div className="row g-4 pt-5">
                  {projectItem.additionalImages?.map((imageSrc, idx) => (
                    <div key={idx} className="col-lg-6 col-md-6">
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-delay={`${2 + idx * 0.4}s`}
                      >
                        <Image
                          alt="img"
                          src={imageSrc}
                          width="570"
                          height="360"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
