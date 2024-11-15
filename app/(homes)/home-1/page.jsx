// pages/Home1.js
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Loader from "@/app/Loader";
import About from "@/components/homes/home-1/About";
import Credible from "@/components/homes/home-1/credible";
import Cta from "@/components/common/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Offering from "@/components/homes/home-1/Offering";
import Pricing from "@/components/homes/home-1/Pricing";
import Process from "@/components/homes/home-1/Process";
import Projects from "@/components/homes/home-1/Projects";
import Techhubs from "@/components/homes/home-1/techhubs";
import Testimonials from "@/components/homes/home-1/Testimonials";
import VideoBox from "@/components/homes/home-1/VideoBox";
import CookieConsent from "@/components/CookieConsent"; // Import CookieConsent
import Services2 from "@/components/homes/home-1/Services2";
import Team from "@/components/homes/home-1/Team";

export const metadata = {
  title: "Home 1 || Dotsito Technologies",
  description: "Dotsito Technologies",
};

export default function Home1() {
  return (
    <>
      {/* <Loader> */}
        <Header1 />
        <main className="main position-relative" id="mains">
          <Hero />
          <About />
          <Credible/> 
          <Techhubs/>
          <Projects />      
          <Facts />
          <Testimonials />
          {/* <Cta /> */}
        </main>
        {/* <Footer1 /> */}
      {/* </Loader> */}
      
      {/* Cookie Consent */}
      {/* <CookieConsent /> */}
    </>
  );
}
