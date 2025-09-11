import Header from "./components/Header";
import Hero from "./components/Hero";
import HighlightStrip from "./components/HighlightStrip";
import AboutUs from "./components/AboutUs";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <WhatsAppButton />
      <Hero />
      <HighlightStrip />
      <AboutUs />
      <Facilities />
      <Gallery />
      <Testimonial />
      <Reservation />
      <ContactUs />
      <Footer />
    </main>
  );
}
