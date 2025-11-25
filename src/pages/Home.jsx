import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import ProjectPage from "./ProjectPage";
import projet from "../data/projet";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Toujours contrôler le scroll nous-mêmes
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Lis le hash au chargement et à chaque retour/arrière (hashchange)
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
      // Pas de hash → on est sur l'accueil : restaure le scroll si on l'a
      setSelectedProject(null);
      const saved = sessionStorage.getItem("homeScroll");
      if (saved) {
        const y = parseInt(saved, 10);
        // Attends le paint avant de scroller pour éviter les sauts
        requestAnimationFrame(() => window.scrollTo(0, y));
      }
    };

    applyFromHash(); // au premier mount (utile quand on refresh sur un projet)
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const handleCardClick = (projectId) => {
    // 1) Sauvegarde le scroll actuel de l'accueil
    sessionStorage.setItem("homeScroll", String(window.scrollY));
    // 2) Encode la navigation dans l’URL
    window.location.hash = `project-${projectId}`;
  };

  const handleBackToHome = () => {
    // Revenir à l’accueil → enlève le hash (déclenchera hashchange + restauration du scroll)
    window.location.hash = "";
  };

  if (selectedProject !== null) {
    return (
      <ProjectPage
        project={projet[selectedProject]}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen pt-8">
      <header className="mb-20 mt-10 flex flex-col items-center gap-5">
        <h1 className="text-5xl font-bold text-white mb-4">Lucas Charlet</h1>
        <p className="text-gray-400 text-lg">
          Scroll Down to discover my projects
        </p>
      </header>

      <Cards onCardClick={handleCardClick} />

      <footer className="mt-12 text-center text-gray-400 pb-2">
        <p>&copy; 2025 Lucas Charlet. All rights reserved.</p>
      </footer>
    </div>
  );
}
