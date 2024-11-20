import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import Projects from "@/components/otherPages/project/Projects";
import Projects1 from "@/components/homes/home-1/Projects";
import Link from "next/link";
import ChatGPTWidget from "@/app/ChatGPTWidget";
import Loader from "@/app/Loader";
import HeroModule from "@/components/common/HeroModule";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Careers || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
      <Loader>
        <Header1 />
        <main className="main position-relative" id="mains">
          <HeroModule title={'Careers'} subtitle={`Step into a world where innovation meets purpose, creating technology driven, human centered experiences that leave a lasting impact. Our careers are built around moments that matter opportunities to shape the future, achieve ambitious goals, and drive meaningful change. Be part of a team that values creativity, collaboration, and a relentless pursuit of excellence, where your ideas and passion are the foundation of transformative success.`} videoPath={`/assets/videos/careers.mp4`} customText={`A year with Dotsito is equivalent to three years of learning`} />


          <HeroModule title={'Join Dotsito'} subtitle={`Your aspirations, your career, your path. \n Dotsito invites you.`} imagePath={`/assets/img/careers/bannerbg.jpg`} customButton customButtonLink={`/careers/jobs`} customButtonText={`Join now`} customHTMLBanner={`<br/>Or share your resume at <br/><strong><a style="color: white" href='mailto:operations@dotsito.com'>operations@dotsito.com</a></strong>`}/>
          {/* <Projects /> */}
          {/* <Projects1 /> */}
          {/* <ChatGPTWidget/> */}
          {/* <Cta /> */}
        </main>
        <Footer1 />
      </Loader>
    </>
  );
}
