"use client";
import Link from "next/link";
import Image from "next/image";
import { recentPosts } from "@/data/blogs";
import { socialLinks2 } from "@/data/socials";
import { footerLinks } from "@/data/footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";

export default function Footer1() {
  const form = useRef();

  const sandMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", form.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Message Sent successfully!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        } else {
          toast.error("Ops Message not Sent!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <footer
      className="footer-area"
      style={{ backgroundImage: "url(/assets/img/bg/footerBg1.png)" }}
    >
      <div className="widget-area style1 pt-100 pb-80">
        <div className="shape2_1">
          <Image
            src="/assets/img/shape/footerShape1_1.png"
            width={361}
            height={372}
            alt="shape"
          />
        </div>
        <div className="shape2_2">
          <Image
            src="/assets/img/shape/footerShape2_2.png"
            width={288}
            height={383}
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="footer-layout style1">
            <div className="row">
              {/* About Section */}
              {/* <div className="col-xl-4 col-md-6 col-12">
                <div
                  className="widget footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="gt-widget-about">
                    <p className="about-text">
                      DOTSITO IT is a dynamic and innovative technology company
                      dedicated to solutions.
                    </p>
                    <div className="gt-social style2">
                      {socialLinks2.map((link, index) => (
                        <a href={link.href} key={index}>
                          <i className={link.iconClass} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-xl-4 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <h3 className="widget_title">So we</h3>
                  <div className="menu-all-pages-container">
                    <p style={{ color: '#fff' }}>
                      DOTSITO IT is a dynamic and innovative technology company
                      dedicated to solutions.
                    </p>
                    <div className="gt-social style2">
                      {socialLinks2.map((link, index) => (
                        <a href={link.href} key={index}>
                          <i className={link.iconClass} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>



              {/* Quick Links Section */}
              <div className="col-xl-4 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      {footerLinks.map((item, index) => (
                        <li key={index}>
                          <Link scroll={false} href={item.href}>
                            <i className="fa-solid fa-chevrons-right" />
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="col-xl-4 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1.6s"
                >
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="checklist">
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-thin fa-envelope" />
                      </li>
                      <Link className="text-white" href = "mailto:operations@dotsito.com">operations@dotsito.com</Link>
                    </ul>
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-light fa-phone-volume" />
                      </li>
                      <li className="text-white">
                       <Link href="tel:+914257358130" style={{color: 'white'}}>+91 4257358130</Link><br /> 
                       <Link href="tel:+914257299473" style={{color: 'white'}}>+91 4257299473</Link><br />
                       {/* +91 4257 299473 */}
                      </li>
                    </ul>
                    <form
                      ref={form}
                      onSubmit={sandMail}
                      className="email-input-container"
                    >
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email address"
                        required
                        style={{ width: "250px", fontSize: "12px" }}
                      />
                      <button
                        type="submit"
                        id="submitButton"
                        style={{
                          top: "10px",
                          right: "5px",
                          padding: "5px 9px",
                          fontSize: "15px",
                        }}
                      >
                        <i className="fa-regular fa-arrow-right-long" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-theme" style={{ padding: '2px 10px' }}>
        <div className="">
          <div className="">
            <div className="" data-wow-delay=".3s" >
              <p style={{ color: '#fff', textAlign: 'center', margin: 0, padding: '2px' }}>
                <i className="fal fa-copyright" />
                {" " + new Date().getFullYear()} All rights reserved. Dotsito Technologies.
              </p>
            </div>
            {/* <div className="layout-link wow fadeInUp" data-wow-delay=".6s">
              <div className="link-wrapper">
                <Link scroll={false} href={``}>
                  Terms &amp; Condition
                </Link>
                <Link scroll={false} href={``}>
                  Privacy Policy
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
