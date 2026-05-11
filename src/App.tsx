import { useEffect } from "react";
import { meta } from "./data/siteContent";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { PageLoader } from "./components/layout/PageLoader";
import { ScrollTopFab } from "./components/layout/ScrollTopFab";
import { WhatsAppFab } from "./components/layout/WhatsAppFab";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { KnowHow } from "./components/sections/KnowHow";
import { Pricing } from "./components/sections/Pricing";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";

export default function App() {
  useEffect(() => {
    document.title = meta.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", meta.description);
  }, []);

  return (
    <>
      <PageLoader />
      <a className="sn-skip" href="#hero">
        Aller au contenu
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <KnowHow />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollTopFab />
    </>
  );
}
