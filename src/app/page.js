import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
