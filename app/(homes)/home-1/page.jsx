import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import About from "@/components/homes/home-1/About";
import Blog from "@/components/homes/home-1/Blog";
import Cta from "@/components/common/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Offering from "@/components/homes/home-1/Offering";
import Pricing from "@/components/homes/home-1/Pricing";
import Process from "@/components/homes/home-1/Process";
import Projects from "@/components/homes/home-1/Projects";
import Testimonials from "@/components/homes/home-1/Testimonials";
import VideoBox from "@/components/homes/home-1/VideoBox";
import Screenshoots from "@/components/homes/home-3/Screenshoots";
import TextSlider from "@/components/homes/home-2/TextSlider";
import Services from "@/components/homes/home-1/Services";
import Loader from "@/app/Loader";
  // import ProjectDetails from "@/components/otherPages/project/ProjectDetails";
// import ProjectWorldMap from "@/components/otherPages/ProjectWorldMap";
// import MapComponent from "@/components/otherPages/MapComponent";
export const metadata = {
  title: "Home 1 || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Home1() {
  return (
    <>
    <Loader>
      <Header1 />
      <main className="main position-relative" id="mains">
        <Hero />
        {/* <Services />  */}
        <TextSlider/>

        <About />
        <Offering />
        <VideoBox />
        {/* <Team /> */}
        <Projects />
        <Process />

        <Screenshoots/>
        <Facts />
        {/* <Pricing /> */}
        <Testimonials />
        {/* <ProjectWorldMap/> */}
        <Cta />
      </main>
      <Footer1 />
      </Loader>
    </>
  );
}
