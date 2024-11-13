"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import { activeMobileMenu } from "@/utlis/toggleMobileMenu";
import { activeSideMenu } from "@/utlis/toggleSideMenu";

export default function Header1() {
  return (
    <header className="gt-header header-layout1 theme-background">
      <div className="sticky-wrapper sticky">
        <div className="menu-area">
          <div className="container" style={{maxWidth:"98%"}}>
            <div className="row align-items-center justify-content-between">
              {/* Logo Section */}
              <div className="col-auto">
                <div className="header-logo">
                  <Link scroll={false} href={`/`}>
                    <Image
                      src="/assets/img/DotsitoName.png"
                      width={200}    // Smaller logo size for mobile
                      height={200}
                      alt="Dotsito"
                      className="logo-header-main theme-logo responsive-logo"
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="col-auto d-none d-xl-inline-block">
                
              </div>

              {/* Contact and Sidebar Toggle */}
              <div className="col-auto d-flex align-items-center justify-content-end header-right">
              <nav className="main-menu">
                  <ul>
                    <Nav />
                  </ul>
                </nav>
                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  onClick={activeMobileMenu}
                  className="gt-menu-toggle sidebar-btn theme-button d-xl-none"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    padding: "8px",
                    marginLeft: "10px"
                  }}
                >
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
