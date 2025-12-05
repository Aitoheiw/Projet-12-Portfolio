import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import ProjectPage from "./ProjectPage";
import projet from "../data/projet";
import Nav from "../components/Nav";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const applyFromHash = () => {
      const { hash } = window.location;
      if (hash.startsWith("#project-")) {
        const id = parseInt(hash.replace("#project-", ""), 10);
        if (!Number.isNaN(id) && projet[id]) {
          setSelectedProject(id);
          return;
        }
      }

      setSelectedProject(null);
      const saved = sessionStorage.getItem("homeScroll");
      if (saved) {
        const y = parseInt(saved, 10);

        requestAnimationFrame(() => window.scrollTo(0, y));
      }
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const handleCardClick = (projectId) => {
    sessionStorage.setItem("homeScroll", String(window.scrollY));

    window.location.hash = `project-${projectId}`;
  };

  const handleBackToHome = () => {
    window.location.hash = "";
  };

  useEffect(() => {
    if (selectedProject !== null) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  if (selectedProject !== null) {
    return (
      <ProjectPage
        project={projet[selectedProject]}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen w-screen pt-8 bg-white dark:bg-zinc-800 dark:text-white">
      <Nav />
      <main>
        <Header />
        <About />
        <Skills />
        <Cards onCardClick={handleCardClick} />

        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
