import Image from "next/image";
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { Intro } from "./components/intro-content"
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <main>
        <Intro/>
      </main>
      <Footer/>
    </div>
  );
}