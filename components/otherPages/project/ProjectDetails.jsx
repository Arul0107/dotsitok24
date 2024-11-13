import React from "react";
import Image from "next/image";
import { Padding } from "maplibre-gl";
// import TextSlider from "@/components/homes/home-2/TextSlider";

export default function ProjectDetails({ projectItem }) {
  return (
    <section className="Project-details-section fix space-top pb-425">
      <div
        className="gt-hero-bg hero-color-bg"
        style={{
          backgroundImage: "url(/assets/img/credible/image1.png)",
          borderTop: "5px solid",
        }}
      ></div>
      <div className="container" style={{ maxWidth: "98%" }}>
        <div className="project-details-wrapper">
          <div className="row" style={{ display: "table-row" }}>
            <div
              className="col-lg-12"
              style={{ display: "table-cell", width: "60%" }}
            >
              {/* <TextSlider/> */}
              <div className="project-details-items">
                {/* Project Image */}

                {/* Challenge Section */}
                <div
                  className="details-content pt-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h2>{projectItem.title}</h2>
                  <br></br>
                  <div className="row g-4 pt-5">
                    <div className="col-lg-6 col-md-6" style={{width:"100%",paddingBottom:"3rem"}}>
                      <div className="thumb wow fadeInUp" style={{backgroundImage:`url(${projectItem.imgSrc})`,backgroundRepeat:"no-repeat",backgroundSize:"100%",height:"300px",borderRadius:"25px"}}>
                        {/* <Image
                          alt="img"
                          src={projectItem.imgSrc}
                          width="300"
                          height="100"
                        /> */}
                      </div>
                    </div>
                  </div>
                  <h4>Challenges</h4>
                  <p>
                    {projectItem.overview ||
                      "Default challenge description for the project. Customize this based on the JSON data."}
                  </p>
                  <h4>Our Approach and Solution</h4>
                  <p>
                    {projectItem.whatwedid ||
                      "Default challenge description for the project. Customize this based on the JSON data."}
                  </p>
                </div>

                {/* Result Section */}
                <div
                  className="details-content pt-5 wow fadeInUp"
                  data-wow-delay="1.9s"
                >
                  <h4>Outcome</h4>
                  <p>
                    {projectItem.outcome ||
                      "Default result description for the project. Customize this based on the JSON data."}
                  </p>
                </div>

                {/* Additional Images */}
              </div>
            </div>

            {/* Result Section */}
            <div
              className="project-details-items pt-5 wow fadeInUp"
              data-wow-delay="1.9s"
            >
              <div
                className="details-content"
                style={{
                  borderLeft: "10px solid #2463cf",
                  borderRadius: "25px",
                  paddingLeft: "50px",
                }}
              >
                <p className="heading">Customer </p>
                <p className="content">
                  Leading European Telecom Service Provider
                </p>
                <p className="heading">Industry</p>
                <p className="content">Telco</p>
                <p className="heading">Location</p>
                <p className="content">London</p>
                <p className="heading">Employees</p>
                <p className="content">10,000+</p>
                <p className="heading">Products</p>
                <p className="content">
                  Superfast broadband, Networked IT services, Cyber security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
