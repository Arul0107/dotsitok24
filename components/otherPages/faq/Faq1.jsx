import React from "react";

export default function Faq1() {
  return (
    <div className="accordion" id="accordion">
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            aria-expanded="true"
            aria-controls="faq1"
          >
            Where is the best place to incorporate my business?
          </button>
        </h5>
        <div
          id="faq1"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Choosing the best location for incorporating your business depends on factors like taxes, legal requirements, and where you plan to operate. Many companies choose locations known for business-friendly regulations.
          </div>
        </div>
      </div>
      
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
            aria-expanded="false"
            aria-controls="faq2"
          >
            How detailed should a business plan be?
          </button>
        </h5>
        <div
          id="faq2"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            A business plan should be detailed enough to outline your objectives, target market, and financial projections. However, it should also be flexible, allowing you to adjust as your business grows.
          </div>
        </div>
      </div>
      
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
            aria-expanded="false"
            aria-controls="faq3"
          >
            What services are included in your business support packages?
          </button>
        </h5>
        <div
          id="faq3"
          className="accordion-collapse show"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Our business support packages include everything from startup guidance, compliance assistance, and consulting to help with growth strategies and technology solutions.
          </div>
        </div>
      </div>
      
      <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq4"
            aria-expanded="false"
            aria-controls="faq4"
          >
            How do I measure my company’s performance?
          </button>
        </h5>
        <div
          id="faq4"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Company performance can be measured using various key performance indicators (KPIs), including revenue growth, customer satisfaction, and operational efficiency. Choosing the right KPIs depends on your industry and business goals.
          </div>
        </div>
      </div>
    </div>
  );
}
