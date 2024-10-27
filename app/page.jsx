import Home1 from "./(homes)/home-1/page";
import ChatGPTWidget from "./ChatGPTWidget";
import Loader from "./Loader"; // Direct path to Loader.jsx in the same directory

export const metadata = {
  title: "Home 1 || Dotsito Technologies",
  description: "Dotsito Technologies",
};

export default function Page() {
  return (
    <Loader>
      <Home1 />
      <ChatGPTWidget/>  
    </Loader>
  );
}
