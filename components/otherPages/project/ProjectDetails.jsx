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


                {/* Challenge Section */}
                <div
                  className="details-content pt-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h3>{projectItem.title}</h3>
                
                  <p>
                    {projectItem.challenge ||
                      "Default challenge description for the project. Customize this based on the JSON data."}
                  </p>
                </div>

                {/* Features List */}
                <div className="row g-4 pt-5">
                  {projectItem.features?.map((feature, index) => (
                    <div key={index} className="col-lg-4 col-md-8">
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
                  {projectItem.additionalImages ?.map((imageSrc, idx) => (
                    <div key={idx} className="col-lg-6 col-md-6">
                      <div
                        className="thumb wow fadeInUp"
                        data-wow-delay={`${2 + idx * 0.4}s`}
                      >
                        <Image
                          alt="img"
                          src={imageSrc}
                          width="450"
                          height="300"
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
