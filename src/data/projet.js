import KoreanImg from "../assets/projetImg/Capture korean.png";
import BookiImg from "../assets/projetImg/Capture Booki.png";
import OhMyImg from "../assets/projetImg/Capture-OhMyFood.png";
import PrintImg from "../assets/projetImg/Capture-Print.png";
import SophieImg from "../assets/projetImg/Capture-Sophie.png";
import KasaImg from "../assets/projetImg/Capture-Kasa.png";
import NinaImg from "../assets/projetImg/Capture-Nina.png";
import EventsImg from "../assets/projetImg/Capture-Events.png";
import ArgentImg from "../assets/projetImg/Capture-Argent.png";
import QwentaImg from "../assets/projetImg/Capture-Qwenta.png";

const SLIDES = [
  {
    src: ArgentImg,
    tech: ["React", "Redux", "JavaScript"],
    translations: {
      fr: {
        h2: "Argent Bank",
        p: "Application de banque en ligne",
        description:
          "Argent Bank est une plateforme bancaire en ligne souhaitant se développer dans le secteur de la finance numérique. En tant que développeur Front-End, j’ai collaboré avec le chef de projet pour mettre en place le tableau de bord utilisateur et concevoir un système d’authentification sécurisé. Le projet a nécessité la maîtrise de React, Redux, l’intégration d’API, ainsi que des bonnes pratiques de Green Code, le tout dans un environnement professionnel avec des délais stricts.",
        context:
          "En rejoignant Argent Bank, j’ai travaillé avec le chef de projet à la livraison du nouveau système d’authentification et du tableau de bord utilisateur. Le CTO a fourni des exigences détaillées pour deux phases de développement. La première phase portait sur l’application complète en React avec la connexion, la déconnexion, les routes protégées et la gestion du profil via Redux. Les ingénieurs backend avaient déjà fourni les routes API ainsi que la documentation Swagger. Dans la deuxième phase, on m’a demandé de recommander la manière dont le nouveau système de transactions devrait être modélisé au niveau de l’API et de produire une proposition complète en Swagger YAML pour les endpoints liés à la consultation, la modification et la gestion des détails des transactions.",
        Objectives:
          "Créez une application React complète et responsive en suivant les maquettes fournies. Implémentez une authentification complète : connexion, déconnexion, gestion des erreurs et routes protégées. Assurez-vous que les utilisateurs puissent consulter et modifier leur nom d’affichage uniquement après une connexion réussie. Utilisez Redux pour gérer l’état global et garantir la scalabilité en vue des futures fonctionnalités de gestion des transactions. Appliquez les principes de Green Code en optimisant les images et en créant des composants d’interface réutilisables. Pour la phase 2, proposez l’architecture de l’API backend pour le système de transactions et livrez une spécification Swagger complète au format YAML.",
        SkillsDeveloped:
          "Front-End Development : architecture React, conception basée sur les composants, modèles d’interface réutilisables, mises en page responsives, optimisation des images et bonnes pratiques de code propre. State Management : implémentation de Redux pour l’authentification et la gestion des sessions utilisateur, préparation de l’application à des jeux de données plus volumineux. API Integration : compréhension de la documentation Swagger, intégration des routes backend, gestion des données protégées, des états d’erreur et des parcours utilisateurs. Technical Documentation : conception et rédaction d’une proposition d’API complète en Swagger YAML couvrant les méthodes HTTP, les routes, les paramètres et les codes de réponse. Professional Collaboration : travail avec un CTO, un chef de projet et une équipe backend pour respecter des délais stricts et fournir une base scalable pour de futures fonctionnalités bancaires.",
        Results:
          "Une application React entièrement fonctionnelle et responsive, avec une authentification sécurisée et un accès utilisateur protégé. Une architecture d’état Redux robuste prenant en charge la connexion, la déconnexion, les sessions persistantes et la mise à jour du profil. Un code front-end propre et optimisé, conforme aux principes du Green Code. Une proposition d’API complète pour le futur système de transactions, rédigée en Swagger YAML avec l’ensemble des méthodes, routes, paramètres et réponses attendues. Une base technique solide pour les prochaines phases de développement du tableau de bord d’Argent Bank.",
      },
      en: {
        h2: "Argent Bank",
        p: "Online banking application",
        description:
          "Argent Bank is an online banking platform aiming to expand within the digital finance sector. As a Front-End Developer, I collaborated with the project manager to implement the user dashboard and build a secure authentication system. The project required mastering React, Redux, API integration, and Green Code best practices while working in a professional environment with strict deadlines.",
        context:
          "Upon joining Argent Bank, I worked with the project manager, on delivering the new authentication system and user dashboard. The CTO, provided detailed requirements for two development phases. Phase 1 focused on the full React application with user login, logout, protected routes, and profile management using Redux. The backend engineers already provided the API routes along with Swagger documentation. In Phase 2, I was asked to recommend how the new transaction system should be modeled at the API level and to produce a complete Swagger YAML proposal for endpoints related to viewing, editing, and managing transaction details.",
        Objectives:
          "Build a complete responsive React application following the provided mockups. Implement full authentication: login, logout, error handling, and protected routes. Ensure that users can view and edit their display name only after a successful login. Use Redux to manage global state and ensure scalability for the upcoming transaction features. Apply Green Code practices by optimizing images and creating reusable UI components. For Phase 2, propose the backend API architecture for the transaction system and deliver a full Swagger specification in YAML format.",
        SkillsDeveloped:
          "Front-End Development: React architecture, component-based design, reusable UI patterns, responsive layouts, image optimization, and clean code practices. State Management: Implementing Redux for authentication and user session handling, preparing the application for larger datasets. API Integration: Understanding Swagger documentation, integrating backend routes, handling protected data, error states, and user flows. Technical Documentation: Designing and writing a full API proposal in Swagger YAML covering HTTP methods, routes, parameters, and response codes. Professional Collaboration: Working with a CTO, project manager, and backend team to meet strict deadlines and deliver a scalable foundation for future banking features.",
        Results:
          "A fully functional and responsive React application with secure authentication and protected user access. A robust Redux state architecture supporting login, logout, persistent sessions, and profile updates. Clean and optimized front-end code aligned with Green Code standards. A complete API proposal for the upcoming transaction system, written in Swagger YAML with all methods, routes, parameters, and expected responses. A solid technical base for the next development phases of Argent Bank’s dashboard.",
      },
      ko: {
        h2: "Argent Bank",
        p: "온라인 라이닝 앱",
        description:
          "Argent Bank는 디지털 금융 분야에서 성장하고자 하는 온라인 은행 플랫폼입니다. 프론트엔드 개발자로서 저는 프로젝트 매니저와 협력하여 사용자 대시보드를 구축하고 안전한 인증 시스템을 설계했습니다. 이 프로젝트는 React, Redux, API 연동, 그리고 그린 코드(Green Code) 모범 사례에 대한 높은 이해를 요구했으며, 엄격한 마감 기한이 있는 전문적인 환경에서 진행되었습니다.",
        context:
          "아르젠트 뱅크에 합류한 후, 나는 프로젝트 매니저와 함께 새로운 인증 시스템과 사용자 대시보드를 구현하는 작업을 진행했습니다. CTO는 두 단계의 개발을 위한 상세한 요구 사항을 제공했습니다. 1단계에서는 로그인, 로그아웃, 보호된 경로, Redux를 활용한 프로필 관리가 포함된 전체 React 애플리케이션 개발에 집중했습니다. 백엔드 엔지니어들은 이미 API 라우트와 Swagger 문서를 제공한 상태였습니다. 2단계에서는 새로운 거래 시스템을 API 수준에서 어떻게 모델링해야 하는지에 대한 제안을 요청받았으며, 거래 상세 조회, 수정, 관리에 관련된 엔드포인트를 위한 완전한 Swagger YAML 제안서를 작성해야 했습니다.",
        Objectives:
          "제공된 목업을 기반으로 반응형 React 애플리케이션을 완성하세요. 로그인, 로그아웃, 에러 처리, 보호된 라우트를 포함한 전체 인증 기능을 구현해야 합니다. 사용자는 로그인에 성공한 이후에만 자신의 표시 이름을 조회하고 수정할 수 있어야 합니다. 전역 상태 관리를 위해 Redux를 사용하여 향후 추가될 거래 기능을 고려한 확장성을 보장하세요. 이미지를 최적화하고 재사용 가능한 UI 컴포넌트를 생성하여 그린 코드 원칙을 적용합니다. 2단계에서는 거래 시스템을 위한 백엔드 API 아키텍처를 제안하고, 거래 조회·수정·관리와 관련된 엔드포인트를 포함한 전체 Swagger 사양을 YAML 형식으로 제공해야 합니다.",
        SkillsDeveloped:
          "Front-End Development: React 아키텍처, 컴포넌트 기반 설계, 재사용 가능한 UI 패턴, 반응형 레이아웃, 이미지 최적화 및 클린 코드 실천. State Management: 인증과 사용자 세션 관리를 위한 Redux 구현, 더 큰 데이터셋을 처리할 수 있도록 애플리케이션을 준비. API Integration: Swagger 문서 이해, 백엔드 라우트 연동, 보호된 데이터와 에러 상태, 사용자 플로우 처리. Technical Documentation: HTTP 메서드, 라우트, 파라미터, 응답 코드를 모두 포함하는 전체 API 제안을 Swagger YAML 형식으로 설계 및 작성. Professional Collaboration: CTO, 프로젝트 매니저, 백엔드 팀과 협업하여 엄격한 마감 기한을 맞추고, 향후 뱅킹 기능을 위한 확장 가능한 기반을 구축.",
        Results:
          "보안 인증과 보호된 사용자 접근을 제공하는 완전한 기능의 반응형 React 애플리케이션. 로그인, 로그아웃, 지속 세션, 프로필 업데이트를 지원하는 견고한 Redux 상태 아키텍처. 그린 코드 기준에 맞게 작성된 깔끔하고 최적화된 프론트엔드 코드. 향후 거래 시스템을 위해 모든 메서드, 라우트, 파라미터, 예상 응답을 포함하여 Swagger YAML로 작성된 완전한 API 제안서. 아르젠트 뱅크 대시보드의 다음 개발 단계를 위한 탄탄한 기술적 기반.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_10_ArgentBank-Frontend",
    ],
  },
  {
    src: QwentaImg,
    h2: "Qwenta",
    p: "Project management",
    tech: ["Canva", "Notion", "Word", "Wakelet"],
    description:
      " Menu Maker is a web application designed to help restaurant owners create, customize, and publish their menus quickly and intuitively. As the Front-End Developer at Webgencia, i was entrusted with preparing the entire project plan while the Product Owner was on medical leave including the technical specifications and the Agile structuring. This project demonstrates my ability not only to code, but also to handle full project preparation, planning, and documentation like in a real-world agency environment.",

    context:
      "The client, Qwenta, requested a tool allowing restaurant owners to design and publish their menus in just a few clicks. The Product Owner, provided initial materials (mockups + functional specs) before taking sick leave. During his absence, i was fully responsible for: Structuring the project. Writing the 15-page Technical Specification Document. Building a complete Agile Kanban board. Organizing a technology watch. Also prepared the slide deck that the PO would later present to the client.",

    Objectives:
      "Define the technical foundation of the Menu Maker (architecture, database choice, component structure). Prepare a detailed technical specification document used for project decomposition. Build a complete Agile workflow: User needs User stories Tasks with success criteria Story point estimates Front-end / back-end assignment Organize a two-axis technology watch to support decision-making. Produce a professional slide presentation summarizing the entire project.",

    SkillsDeveloped:
      "Project Planning & Structuring Writing technical documentation Translating functional needs into technical tasks Architecture and database reasoning Using user stories, acceptance criteria, and story points Agile & Team Collaboration Full Kanban creation (To Do → In Progress → Testing → Done) Task assignment by role (Front-End / Back-End) Preparing a professional slide deck for client presentation Technical Research Setting up a structured technology watch Comparing SQL vs NoSQL approaches Evaluating frameworks, libraries, accessibility rules, and security best practices Front-End Expertise React component structure UX/UI decisions based on functional needs Accessibility-first thinking",

    Results:
      "A full technical specification document (up to 15 pages) ready to guide the development team. A complete and organized Kanban board aligned with Agile methodologies. A coherent tech stack recommendation, justified through research. A structured 20-slide presentation delivered to the Product Owner. A clear and actionable foundation for developers to start building Menu Maker efficiently. This preparation acts as the blueprint for a successful product delivery.",
    links: [
      "Wakelet: https://wakelet.com/wake/I1H0ncdLQwK5PV8ukx19P",
      "Notion: https://www.notion.so/Menu-Maker-2a45cfdfe2e18121a522cb3295ff309f",
      "canva: https://www.canva.com/design/DAG2Utrw91M/juymc8h9Zu4xnHZwMGzJTg/edit",
      "Word: https://docs.google.com/document/d/1K6O4b7cyyiiwQ6vlPPr71i8X4462z0WFT-eXIvE5LfY/edit?usp=sharing",
    ],
  },
  {
    src: KoreanImg,
    h2: "Korean Flashcards",
    p: "learn Korean the fun way",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "Korean Flashcards is an independent learning platform designed to help users memorize Korean vocabulary efficiently through spaced repetition. Built as a full React application connected to a JSON-based local API, it provides an interactive flashcard system with over 900 words and expressions. The project demonstrates my ability to design smart learning tools, implement SRS logic, and create a smooth user experience across all devices.",

    context:
      "As part of my freelance and personal development work, I created Korean Flashcards to support learners who want to study Korean at their own pace—whether for travel, K-dramas, or long-term language learning. The platform includes an SRS (Spaced Repetition System), a mobile-friendly UI, and custom data served through a JSON server. The homepage highlights the learning philosophy, strengths of the tool, and important notes about context-specific vocabulary. This project allows users to access their flashcards on desktop, tablet, or smartphone and learn Korean anywhere.",

    Objectives:
      "Develop a full React application dedicated to vocabulary memorization. Implement a spaced repetition system to optimize long-term retention. Set up a local JSON API to store and serve over 900 Korean words and expressions. Build a clean, responsive, and user-friendly front-end. Provide learners with daily practice sessions using clear flashcard logic (show/hide, score, next word, progress). Add informational content explaining the method, advantages, and important notes about translation accuracy.",

    SkillsDeveloped:
      "React Development: Component-based architecture, state management with hooks, dynamic rendering, and reusable UI patterns. API & Data Handling: Using JSON Server to serve a large vocabulary dataset and simulate real API interactions. Learning System Design: Implementing spaced repetition logic, retention scoring, and interactive flashcard behavior. UI/UX: Building an accessible, responsive interface usable across all devices. Content Structuring: Writing educational content and guiding users through the learning experience. Problem-Solving: Managing data inconsistencies and improving translation accuracy.",

    Results:
      "A complete vocabulary learning platform supporting more than 900 Korean words and expressions. A fully functional spaced repetition system improving memory retention. A responsive React interface accessible on desktop, tablet, and mobile. A clear and structured homepage explaining how the tool works. An engaging and efficient learning experience for Korean language learners. This project combines development skills with educational design to create a practical and powerful study companion.",

    links: [
      "GitHub: https://github.com/Aitoheiw/koreanFlashcards",
      "Netlify: https://koreanflashcards.netlify.app/",
    ],
  },

  {
    src: BookiImg,
    h2: "Booki",
    p: "Housing booking website",
    tech: ["HTML", "CSS"],
    description:
      "Booki is a web platform designed to help users find accommodations and activities in the city of their choice. As the Front-End Developer on the project, I was responsible for integrating the entire user interface using clean, semantic HTML and CSS while collaborating closely with the CTO, and the UI designer. This project highlights my ability to transform professional mockups into a fully functional and responsive interface.",

    context:
      "The company needed a website that would allow users to browse accommodations and activities based on location. The UI designer, delivered the final mockups, and, the CTO, provided a detailed technical document containing all design specifications and constraints. I received the project structure, including an initial HTML file, a CSS folder with starter code, and all required images. My task was to integrate the entire interface, follow the design system precisely, and ensure the layout was responsive and consistent across devices.",

    Objectives:
      "Integrate the entire Booki mockup using HTML and CSS. Follow the design specifications provided in the technical summary. Maintain the file structure given by the CTO. Complete and improve the base HTML and CSS code while keeping clean, semantic markup. Ensure full responsiveness and correct component alignment. Respect pixel accuracy with the designer’s mockups. Deliver the final project folder with all completed files to the CTO.",

    SkillsDeveloped:
      "Front-End Integration: Semantic HTML structure, clean and modular CSS, layout implementation using Flexbox, Grid, and responsive design techniques. Design to Code: Translating a Figma mockup into a pixel-perfect interface, following UI guidelines, color systems, spacing rules, and component consistency. File & Project Structure: Maintaining the given architecture and organizing assets properly. Technical Collaboration: Working with a CTO for technical constraints and with a UI designer for visual fidelity. Professional Standards: Using accessibility basics, responsive breakpoints, and optimized images for performance.",

    Results:
      "A complete, responsive, and visually accurate integration of the Booki mockups using pure HTML and CSS. A clean and well-structured codebase delivered to the CTO. A layout that fully matches the designer’s expectations across desktop, tablet, and mobile. This project provided a solid foundation in front-end integration and marked the start of building professional-quality web interfaces.",

    links: [
      "GitHub: https://github.com/Aitoheiw/Charlet_Lucas_1_Booki_042025",
      "Github Pages: https://aitoheiw.github.io/Charlet_Lucas_1_Booki_042025/",
    ],
  },
  {
    src: OhMyImg,
    h2: "Oh My Food",
    p: "Meal booking website",
    tech: ["HTML", "SCSS"],
    description:
      "OhMyFood is a mobile-first web application showcasing gourmet restaurant menus while allowing customers to pre-select their dishes so meals are ready upon arrival. As the Front-End Developer, I was responsible for building the full responsive interface from Figma mockups, implementing smooth CSS animations, and organizing all styles using SASS. This project demonstrates my ability to deliver a polished, modern, and animated user experience across mobile, tablet, and desktop.",

    context:
      "The company’s commercial team secured four partner restaurants, and the CTO, decided that the first version of the platform would include four complete menus. He provided the mobile and desktop mockups, the assets (images and text), and the interactive Figma prototype detailing the animations to reproduce. With these materials and a creative brief, my mission was to develop the entire interface using a strict mobile-first approach, follow the design system, and implement elegant CSS/SASS animations as shown in the prototype.",

    Objectives:
      "Develop a fully responsive website using a mobile-first approach. Integrate all pages based on the mobile and desktop Figma mockups. Use SASS to structure and modularize the CSS codebase. Implement the animations showcased in the Figma prototype (loading animations, menu reveal effects, button transitions, etc.). Ensure consistency across mobile, tablet, and desktop views. Respect the creative brief and deliver a polished, production-ready interface.",

    SkillsDeveloped:
      "Front-End Integration: Mobile-first development, responsive layouts, semantic HTML, and clean SCSS architecture (7-1 pattern, partials, mixins, variables). Animation Techniques: Implementing keyframe animations, transitions, delays, staggered effects, and smooth UI interactions inspired by the Figma prototype. Design to Code: Translating mockups precisely, respecting spacing, typography, icons, and component structure. Performance & Optimization: Structuring SASS for maintainability, optimizing assets, and using efficient selectors. Professional Collaboration: Working with a CTO and UX designer, understanding design constraints, and communicating technical choices (especially animation logic).",

    Results:
      "A complete mobile-first website featuring four fully integrated restaurant menus. A responsive and consistent layout across all devices. A clean and scalable SASS codebase following best practices. Fully implemented CSS animations that match the Figma prototype. A polished user experience showcasing interactive menus, smooth transitions, and elegant visual effects — ready for real-world use.",

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_4_OhMyFood_Charlet_Lucas",
      "GitHub Pages: https://aitoheiw.github.io/Projet_4_OhMyFood_Charlet_Lucas/",
    ],
  },
  {
    src: PrintImg,
    h2: "Print It",
    p: "Printing website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Print it is a small family-owned printing company looking to modernize its static website by adding dynamic elements. As a freelance Front-End Developer, I was hired to enhance the user experience with an interactive carousel based on the director’s requirements. This project highlights my ability to transform client feedback into a functional, elegant, and responsive UI component.",

    context:
      "Print it needed to bring more life to its website to better showcase its printing services. The company director, contacted me with a detailed video explaining the exact behavior he expected from the carousel: smooth transitions, clear navigation, and clean visuals. My mission was to design and implement this carousel from scratch, ensuring it blended seamlessly into the existing website while improving usability and visual appeal.",

    Objectives:
      "Create a fully functional and responsive image carousel. Implement smooth transitions and interactions based on the client’s video instructions. Ensure compatibility with the existing static site structure. Maintain clean, accessible, and optimized code. Deliver a solution that enhances visual presentation and engages users more effectively.",

    SkillsDeveloped:
      "Front-End Development: Building a custom carousel using semantic HTML, CSS, and JavaScript. UI/UX Enhancement: Designing smooth animations, navigation arrows, indicators, and transition timing to match the client’s vision. Responsive Design: Ensuring the carousel adapts to various screen sizes. Client Collaboration: Translating non-technical video instructions into precise technical implementation. Code Quality: Writing maintainable, modular, and optimized front-end code.",

    Results:
      "A custom-built interactive carousel fully aligned with the client's expectations. Smooth animations and intuitive navigation that significantly improve the site’s visual appeal. A responsive component that integrates seamlessly into the existing layout. A satisfied client and a successful first freelance experience, establishing trust and demonstrating professional reliability.",

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_5_Print_it_Charlet_Lucas",
      "GitHub Pages: https://aitoheiw.github.io/Projet_5_Print_it_Charlet_Lucas/",
    ],
  },
  {
    src: SophieImg,
    h2: "Sophie Bluel",
    p: "Designer’s portfolio",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "This project consisted in upgrading the existing website of an architect by developing dynamic front-end features based on a new Figma design. As a Front-End Developer joining the team, my role was to create key functionalities such as a dynamic gallery, an admin login page, and a modal for media uploads. The project emphasized component development, API interaction, UI integration, and enhancing the user experience of an existing static front-end.",

    context:
      "On Monday morning, the team brief outlined all essential project details. The project manager, provided the Figma design, the back-end API code, the original static front-end, and the Kanban board with assigned tasks. I was responsible for transforming the static architect portfolio into a dynamic and interactive interface. My three main missions were: developing the architect’s gallery page, creating the admin login page from scratch, and building a modal allowing authenticated users to upload new media. With all assets and codebases provided, I was ready to begin the development work.",

    Objectives:
      "Implement the architect’s project gallery based on the provided static HTML, making it dynamic using data from the API. Develop the administrator login page from scratch, including authentication logic and error handling. Build the upload modal from scratch, allowing authenticated users to add new media and instantly update the gallery. Integrate the new Figma design accurately, ensure responsiveness, and connect all front-end features to the back-end API for data persistence.",

    SkillsDeveloped:
      "Front-End Development: DOM manipulation, event handling, dynamic rendering, modular JavaScript, and consuming REST APIs. UI Integration: Implementing a new Figma design with pixel precision, responsive structure, and intuitive interactions. Authentication Systems: Creating a login flow, handling tokens, managing protected routes, and ensuring secure access to admin tools. Component Architecture: Building the upload modal from scratch, including file previews, form validation, and live gallery refresh. Project Workflow: Following a Kanban, collaborating with a PM, and working with an existing codebase and API.",

    Results:
      "A fully dynamic gallery page fetching and displaying real projects from the API. A complete and functional admin login page with secure authentication logic. A custom-built media upload modal connected to the API, enabling real-time updates to the gallery. A modern, responsive, and interactive front-end aligned with the Figma design. The project significantly enhanced the overall UX of the architect’s website and demonstrated strong front-end problem-solving and integration skills.",

    links: ["GitHub: https://github.com/Aitoheiw/Projet_6_Sophie_Bluel-"],
  },
  {
    src: KasaImg,
    h2: "KASA",
    p: "Real estate rental platform",
    tech: ["React", "CSS"],
    description:
      "Kasa is a major French platform for peer-to-peer apartment rentals, featuring hundreds of listings published every day. As a freelance Front-End Developer, I was hired to rebuild the entire user interface using React, following brand-new Figma designs. The mission required creating a fully responsive application, developing reusable components, managing routes with React Router, and delivering high-quality code while relying on a JSON dataset in the absence of the back-end team.",

    context:
      "Kasa’s website was originally built over ten years ago in ASP.NET and had accumulated significant legacy code. Laura, the CTO, initiated a full redesign using a modern JavaScript stack: Node.js for the back-end and React for the front-end. While the back-end recruitment was delayed, she provided a JSON file containing the latest housing listings so I could build the entire front-end independently. The designer, shared the complete Figma component-based design system, interactive prototypes, and functional requirements such as gallery behavior and collapsible menus. With all design assets, coding guidelines, and constraints in hand, I was ready to start the React project.",

    Objectives:
      "Set up the React project using Vite according to Kasa’s coding guidelines. Develop all interface components based on the Figma design system. Implement responsive layouts across desktop, tablet, and mobile. Build the full navigation and routing structure using React Router. Implement functional components such as the image Gallery with looping navigation, and the Collapse system with interactive open/close behavior. Replace placeholder assets with real images from the JSON dataset. Ensure the application faithfully matches the Figma prototypes, including animations and interaction details.",

    SkillsDeveloped:
      "React Development: Component-based architecture, props management, local state, reusable UI elements, and conditional rendering. Routing: Setting up React Router, dynamic routes, error handling, and fallback pages. UI/UX Implementation: Transforming Figma designs into responsive and pixel-perfect components, reproducing prototype animations, and managing image cropping and layout constraints. Functional Logic: Implementing looping galleries, collapse mechanics, and custom component behaviors. Project Autonomy: Building a full front-end without a back-end team, using extracted JSON data, respecting coding guidelines, and collaborating with both a CTO and a designer.",

    Results:
      "A complete, fully responsive React application structured with Vite and matching the Figma designs precisely. A robust component library including the Gallery, Collapse, Header, Footer, Tag lists, and housing detail pages. Smooth functional behaviors such as infinite gallery navigation and interactive collapses. Clean, maintainable, and reusable code that adheres to Kasa’s technical guidelines. A successful redesign demonstrating the transition from legacy ASP.NET to a modern JavaScript front-end architecture.",

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_7_Kasa-FR_Charlet_Lucas",
      "Netlify: https://projet-7-kasa.netlify.app/",
    ],
  },
  {
    src: NinaImg,
    h2: "Nina Carducci",
    p: "Photographer’s portfolio",
    tech: ["React", "JavaScript"],
    description:
      "Nina Carducci is a professional portrait and event photographer whose portfolio website required significant optimization to improve loading speed, accessibility, and SEO performance. As a freelance Front-End Developer, I contacted her proactively with a full audit and later carried out complete performance, accessibility, and SEO optimizations. This project demonstrates my ability to analyze an existing site, implement targeted improvements, and deliver measurable results to a real client.",

    context:
      "While prospecting for freelance clients, I evaluated Nina Carducci’s photography website and noticed slow loading times and several SEO issues. After sending her an audit, she expressed interest and scheduled a call to discuss her needs. Following this discussion, she confirmed her expectations by email: global performance optimization, SEO enhancement, local SEO setup using Schema.org, social meta tags implementation, accessibility corrections, and a detailed before/after optimization report. She also provided her local business details for structured data and access to her GitHub repository to work on a dedicated branch.",

    Objectives:
      "Perform a full optimization of the website’s performance and SEO. Improve image weight and code structure to reduce loading time. Add structured data for local SEO using Schema.org. Implement Open Graph and Twitter Card metadata for social media previews. Ensure accessibility improvements based on Wave and Lighthouse audits. Deliver a detailed optimization report including before/after metrics and a list of all technical modifications.",

    SkillsDeveloped:
      "SEO & Performance Optimization: Image compression, lazy loading, code cleanup, metadata enhancement, caching improvements, and semantic structure adjustments. Technical SEO: Writing Schema.org structured data for local businesses, adding Open Graph and Twitter Card tags, optimizing sitemap and indexing rules. Accessibility: Fixing contrast issues, improving semantic HTML, correcting ARIA attributes, and ensuring better screen reader compatibility. Audit & Reporting: Running Lighthouse and Wave analyses, documenting issues, explaining fixes, and presenting measurable improvements. Client Collaboration: Prospecting, negotiating scope, managing expectations, and delivering a professional optimization package.",

    Results:
      "A significantly faster and better-performing photography website with improved SEO ranking potential. Complete structured data integration enhancing local search visibility. Cleaner, more semantic, and more accessible HTML. Optimized images and improved code structure reducing loading time. A professional before/after optimization report delivered to the client, demonstrating clear improvements backed by audit metrics. A satisfied client and a successful showcase of technical SEO and performance expertise.",

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_8_NinaCarducci-Opti",
      "Github Pages: https://aitoheiw.github.io/Projet_8_NinaCarducci-Opti/",
    ],
  },
  {
    src: EventsImg,
    h2: "724 Events",
    p: "Event management platform",
    tech: ["React", "JavaScript"],
    description:
      "724events is an event management agency preparing to launch the new version of its one-page showcase website. As a freelance Front-End Developer, I was hired to debug, finalize, and validate the integration started by a previous developer. This mission highlights my ability to audit existing code, fix complex UI/UX issues, and deliver a fully functional and reliable website ready for production.",

    context:
      "724events reached out after their initial freelance developer had to leave the project for personal reasons. Although the site was mostly functional, several bugs prevented a smooth user experience. During a video meeting, I met, the Marketing Director, who detailed the expectations and issues to fix. He later sent me the full project code, along with an 'Issues' section summarizing the developer’s notes, and an incomplete test plan (cahier de recette) to finish. My mission was to debug the site, complete missing features, and finalize the full recipe sheet with all test scenarios required for validation.",

    Objectives:
      "Debug all issues listed in the project’s GitHub Issues and those identified during the client meeting. Ensure full responsive and functional behavior across the entire one-page site. Improve UI consistency and fix layout, design, or interaction bugs. Complete and update the entire test plan by adding comprehensive validation scenarios. Prepare a stable, production-ready version of the website for the agency’s launch deadline.",

    SkillsDeveloped:
      "Debugging & Optimization: Inspecting legacy code, solving logic and UI issues, improving structure and performance. Front-End Integration: Fixing CSS layout problems, component inconsistencies, responsive issues, and accessibility errors. Quality Assurance: Completing the test plan (cahier de recette), writing scenarios, and verifying site behavior against expected outcomes. Project Continuity: Taking over an existing codebase, understanding another developer’s work, and completing unfinished tasks. Client Communication: Collaborating with the Marketing Director, clarifying expectations, and providing progress updates.",

    Results:
      "A fully functional, stable, and responsive one-page website ready for publication. All previously reported bugs were fixed, and user interactions now behave consistently across devices. A complete and professional test plan was delivered, covering all validation scenarios for long-term maintenance. The agency gained a reliable final version of their showcase site and was able to move forward with their launch without further delays.",

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_9_Debuggez-une-application-React-Charlet-Lucas",
    ],
  },
];
export default SLIDES;
