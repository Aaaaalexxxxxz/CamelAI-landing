import Image from "next/image";
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { Intro } from "./components/intro-content"
import { MiniFooter } from "./components/minifooter";
import { FAQsection } from "./components/FAQsection";
import { Join } from "./components/Join";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <main>
        <Intro/>
        <Join/>
        <FAQsection/>
        <MiniFooter/>
      </main>
      <Footer/>
    </div>
  );
}