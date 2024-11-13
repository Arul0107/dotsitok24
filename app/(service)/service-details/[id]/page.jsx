import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import ServiceDetails from "@/components/otherPages/service/ServiceDetails";
import Link from "next/link";
import { allService } from "@/data/services";
import ChatGPTWidget from "@/app/ChatGPTWidget";
import Loader from "@/app/Loader";
export const metadata = {
  title:
    "Service Details|| Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page({ params }) {
  const serviceItem =
    allService.filter((elm) => elm.id == params.id)[0] || allService[0];
  return (
    <>
    <Loader/>
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
        <div
            className="breadcumb"
            style={{
              backgroundImage: "url(/assets/img/bg/image.png)",
              animation: "scalein 20s infinite",
              position: "relative",
              height: "600px", // Set height as needed
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay Layer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
                zIndex: 1,
              }}
            />
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="page-heading" style={{paddingTop:"100px"}}>
                <h3 className="wow fadeInUp" data-wow-delay=".3s" style={{color:"white",fontSize:"36px",fontWeight:"500"}}>
                  Services Offerings
                </h3>
                
              </div>
            </div>
          </div>
        </div>
        <ServiceDetails serviceItem={serviceItem} />
        <ChatGPTWidget/>
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
