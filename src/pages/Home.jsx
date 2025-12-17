import { useEffect } from "react";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  // Restore Home scroll position only when returning to Home
  useEffect(() => {
    const restoreFlag = sessionStorage.getItem("homeScrollRestore");
    const saved = sessionStorage.getItem("homeScroll");
    if (restoreFlag === "1" && saved) {
      const y = parseInt(saved, 10);
      if (!Number.isNaN(y)) {
        requestAnimationFrame(() => window.scrollTo(0, y));
      }
    }
    // Clear the flag so a fresh visit doesn't restore scroll
    sessionStorage.removeItem("homeScrollRestore");

    // On leaving Home, save the current position and set the flag
    return () => {
      try {
        sessionStorage.setItem("homeScroll", String(window.scrollY));
        sessionStorage.setItem("homeScrollRestore", "1");
      } catch {}
    };
  }, []);

  return (
    <div className="min-h-screen w-screen pt-8 bg-white dark:bg-zinc-800 dark:text-white">
      <LanguageSwitcher />
      <Nav />
      <main>
        <Header />
        <About />
        <Cards />
        <Skills />

        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
