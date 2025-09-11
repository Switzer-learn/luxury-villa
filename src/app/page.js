import Header from "./components/Header";
import Hero from "./components/Hero";
import HighlightStrip from "./components/HighlightStrip";
import AboutUs from "./components/AboutUs";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HighlightStrip />
      <AboutUs />
      <Facilities />
      <Gallery />
      <Reservation />
      <ContactUs />
      <Footer />
    </main>
  );
}
