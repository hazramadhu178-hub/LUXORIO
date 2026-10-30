// Luxorio — single-page resort website with Light / Warm / Dark modes
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FaqBooking from "./components/FaqBooking";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./components/Shared";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  // Fade-in-up animation for every element carrying the "reveal" class
  useReveal();

  // Theme support: light, warm, dark
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <Header theme={theme} onThemeChange={setTheme} />
      <Hero />
      <About />
      <Facilities />
      <Rooms />
      <Gallery />
      <Services />
      <Features />
      <Testimonials />
      <FaqBooking />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
