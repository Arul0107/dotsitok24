import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";

import TextSlider from "@/components/homes/home-2/TextSlider";
import VideoBox from "@/components/homes/home-2/VideoBox";
import Pricing from "@/components/homes/home-3/Pricing";
import Services2 from "@/components/otherPages/service/Services2";
import Link from "next/link";
export const metadata = {
  title: "Service 2 || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Services 02
                </h1>
                
              </div>
            </div>
          </div>
        </div>
        <Services2 />
        <TextSlider />
        <VideoBox />
        <Pricing />
        <div className="pb-300"></div>
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
