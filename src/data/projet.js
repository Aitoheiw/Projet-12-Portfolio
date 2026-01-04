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
import kStudyHubImg from "../assets/projetImg/k-study-hub.png";

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
      "GitHub: https://github.com/Aitoheiw/Projet_10_ArgentBank_Charlet_Lucas",
    ],
  },
  {
    src: QwentaImg,
    tech: ["Canva", "Notion", "Word", "Wakelet"],

    translations: {
      fr: {
        h2: "Qwenta",
        p: "Gestion de projet",
        description:
          "Menu Maker est une application web conçue pour aider les restaurateurs à créer, personnaliser et publier leurs menus rapidement et intuitivement. En tant que développeur Front-End chez Webgencia, j’ai été chargé de préparer l’intégralité du plan de projet pendant l’arrêt maladie du Product Owner, incluant les spécifications techniques et la structuration Agile. Ce projet démontre ma capacité non seulement à coder, mais aussi à gérer la préparation, la planification et la documentation complètes d’un projet, comme dans une véritable agence.",
        context:
          "Le client, Qwenta, a demandé un outil permettant aux restaurateurs de concevoir et publier leurs menus en quelques clics. Le Product Owner avait fourni des éléments initiaux (maquettes + spécifications fonctionnelles) avant de partir en arrêt maladie. Durant son absence, j’ai été entièrement responsable de : Structurer le projet. Rédiger le document de spécifications techniques de 15 pages. Construire un tableau Kanban Agile complet. Organiser une veille technologique.J’ai également préparé le diaporama que le PO présenterait ensuite au client.",
        Objectives:
          "Définir la base technique de Menu Maker (architecture, choix de la base de données, structure des composants). Préparer un document de spécifications techniques détaillé servant à la décomposition du projet. Construire un flux de travail Agile complet : besoins utilisateurs, user stories, tâches avec critères de réussite, estimations en points d’histoire, répartition front-end / back-end. Organiser une veille technologique à deux axes pour appuyer la prise de décision. Produire une présentation professionnelle sous forme de diaporama résumant l’ensemble du projet.",
        SkillsDeveloped:
          "Planification et structuration de projet Rédaction de documentation technique, Traduction des besoins fonctionnels en tâches techniques, Réflexion sur l’architecture et le choix de la base de données ,Utilisation de user stories, de critères d’acceptation et de story points, Agilité & collaboration en équipe, Création d’un Kanban complet (À faire → En cours → Tests → Terminé), Affectation des tâches par rôle (Front-End / Back-End), Préparation d’un diaporama professionnel pour la présentation client, Recherche technique, Mise en place d’une veille technologique structurée, Comparaison des approches SQL vs NoSQL, Évaluation des frameworks, bibliothèques, règles d’accessibilité et bonnes pratiques de sécurité, Expertise Front-End, Structure de composants React, Décisions UX/UI basées sur les besoins fonctionnels, Approche « accessibility-first »",
        Results:
          "Un document de spécifications techniques complet (jusqu’à 15 pages) prêt à guider l’équipe de développement. Un tableau Kanban complet et organisé, aligné sur les méthodologies Agile. Une recommandation de stack technologique cohérente, justifiée par une recherche approfondie. Une présentation structurée de 20 diapositives remise au Product Owner. Une base claire et exploitable permettant aux développeurs de commencer à construire Menu Maker efficacement. Cette préparation constitue le plan directeur garantissant la réussite du produit.",
      },
      en: {
        h2: "Qwenta",
        p: "Project management",
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
      },
      ko: {
        h2: "Qwenta",
        p: "프로젝트 관리",
        description:
          "Menu Maker는 음식점 운영자들이 메뉴를 빠르고 직관적으로 생성, 커스터마이징, 게시할 수 있도록 설계된 웹 애플리케이션입니다. Webgencia에서 Front-End 개발자로서 나는 Product Owner가 병가 중이던 동안 기술 명세서와 애자일 구조화를 포함한 전체 프로젝트 계획을 준비하는 책임을 맡았습니다. 이 프로젝트는 내가 단순히 코드를 작성하는 것뿐 아니라, 실제 에이전시 환경처럼 전체 프로젝트 준비, 계획, 문서 작업까지 수행할 수 있음을 보여줍니다.",
        context:
          "클라이언트 Qwenta는 음식점 운영자들이 몇 번의 클릭만으로 메뉴를 제작하고 게시할 수 있는 도구를 요청했습니다. 프로덕트 오너는 병가에 들어가기 전에 초기 자료(목업 + 기능 명세)를 제공했습니다. 그의 부재 동안 나는 다음 업무를 전적으로 담당했습니다: 프로젝트 구조화 15페이지 분량의 기술 명세서 작성 완전한 애자일 칸반 보드 구축 기술 동향 조사(테크니컬 워치) 진행 또한 PO가 이후 고객에게 발표할 슬라이드 덱도 내가 준비했습니다.",
        Objectives:
          "Menu Maker의 기술적 기반(아키텍처, 데이터베이스 선택, 컴포넌트 구조)을 정의한다. 프로젝트 분해에 사용될 상세 기술 명세서 문서를 작성한다. 다음을 포함한 완전한 애자일 워크플로우를 구축한다: 사용자 니즈, 사용자 스토리, 성공 기준이 있는 태스크, 스토리 포인트 추정, 프론트엔드/백엔드 작업 분배. 의사결정을 지원하기 위해 두 축으로 이루어진 기술 기술 동향 조사를 진행한다. 프로젝트 전체를 요약하는 전문적인 슬라이드 프레젠테이션을 제작한다.",
        SkillsDeveloped:
          "프로젝트 기획 및 구조화, 기술 문서 작성, 기능 요구사항을 기술 태스크로 변환, 아키텍처 및 데이터베이스 설계에 대한 검토, 사용자 스토리, 승인 기준(acceptance criteria), 스토리 포인트 활용, 애자일 & 팀 협, 전체 칸반 보드 구성 (To Do → In Progress → Testing → Done, 역할별 작업 배정 (프론트엔드 / 백엔드), 클라이언트 프레젠테이션을 위한 전문적인 슬라이드 데크 준비, 기술 리서치, 체계적인 기술 동향(테크 워치) 설정, SQL vs NoSQL 접근 방식 비교, 프레임워크, 라이브러리, 접근성 규칙, 보안 모범 사례 평가, 프론트엔드 전문성, React 컴포넌트 구조 설계, 기능 요구사항을 기반으로 한 UX/UI 의사 결정, 접근성 우선(accessibility-first) 사고 방식",
        Results:
          "개발팀을 효율적으로 안내할 수 있는 최대 15페이지 분량의 기술 명세서 문서. 애자일 방법론에 맞춰 구성된 완전하고 체계적인 칸반 보드. 리서치를 기반으로 정당화된 일관된 기술 스택 제안. 프로덕트 오너에게 전달된 구조적인 20슬라이드 프레젠테이션. 개발자들이 Menu Maker를 효율적으로 구축하기 시작할 수 있도록 하는 명확하고 실행 가능한 기반. 이 준비 과정은 성공적인 제품 출시를 위한 청사진 역할을 한다.",
      },
    },
    links: [
      "Wakelet: https://wakelet.com/wake/I1H0ncdLQwK5PV8ukx19P",
      "Notion: https://www.notion.so/Menu-Maker-2a45cfdfe2e18121a522cb3295ff309f",
      "canva: https://www.canva.com/design/DAG2Utrw91M/juymc8h9Zu4xnHZwMGzJTg/edit",
      "Word: https://docs.google.com/document/d/1K6O4b7cyyiiwQ6vlPPr71i8X4462z0WFT-eXIvE5LfY/edit?usp=sharing",
    ],
  },
  {
    src: KoreanImg,
    tech: ["React", "JavaScript", "CSS"],

    translations: {
      fr: {
        h2: "Korean Flashcards",
        p: "apprendre le coréen de manière ludique",
        description:
          "Korean Flashcards est une plateforme d’apprentissage autonome conçue pour aider les utilisateurs à mémoriser efficacement le vocabulaire coréen grâce à la répétition espacée. Développée comme une application React complète connectée à une API locale basée sur JSON, elle propose un système de flashcards interactif avec plus de 900 mots et expressions. Le projet démontre ma capacité à concevoir des outils d’apprentissage intelligents, à implémenter une logique SRS et à créer une expérience utilisateur fluide sur tous les appareils.",

        context:
          "Dans le cadre de mon travail freelance et de mon développement personnel, j’ai créé Korean Flashcards pour accompagner les apprenants souhaitant étudier le coréen à leur rythme que ce soit pour voyager, regarder des K-dramas ou s’engager dans un apprentissage linguistique sur le long terme. La plateforme inclut un système SRS (Spaced Repetition System), une interface adaptée au mobile, et des données personnalisées servies via un serveur JSON. La page d’accueil met en avant la philosophie d’apprentissage, les points forts de l’outil et des remarques importantes concernant le vocabulaire dépendant du contexte. Ce projet permet aux utilisateurs d’accéder à leurs flashcards sur ordinateur, tablette ou smartphone et d’apprendre le coréen où qu’ils soient.",

        Objectives:
          "Développer une application React complète dédiée à la mémorisation du vocabulaire. Mettre en place un système de répétition espacée afin d’optimiser la rétention à long terme. Configurer une API JSON locale pour stocker et servir plus de 900 mots et expressions en coréen. Concevoir une interface front-end claire, responsive et agréable à utiliser. Offrir aux apprenants des séances de pratique quotidiennes grâce à une logique de flashcards explicite (afficher/masquer, score, mot suivant, progression). Ajouter un contenu informatif expliquant la méthode, ses avantages et les points importants concernant la précision des traductions.",

        SkillsDeveloped:
          "Développement React : architecture basée sur les composants, gestion de l’état avec les hooks, rendu dynamique et modèles d’interface réutilisables. API & gestion des données : utilisation de JSON Server pour servir un large ensemble de vocabulaire et simuler de véritables interactions API. Conception d’un système d’apprentissage : implémentation de la logique de répétition espacée, du scoring de rétention et du comportement interactif des flashcards. UI/UX : création d’une interface accessible et responsive, utilisable sur tous les appareils. Structuration du contenu : rédaction de contenu éducatif et accompagnement des utilisateurs dans leur parcours d’apprentissage. Résolution de problèmes : gestion des incohérences de données et amélioration de la précision des traductions.",

        Results:
          "Une plateforme complète d’apprentissage du vocabulaire prenant en charge plus de 900 mots et expressions coréennes. Un système de répétition espacée entièrement fonctionnel améliorant la rétention mnésique. Une interface React responsive, accessible sur ordinateur, tablette et mobile. Une page d’accueil claire et structurée expliquant le fonctionnement de l’outil. Une expérience d’apprentissage engageante et efficace pour les apprenants du coréen. Ce projet combine des compétences en développement et en conception pédagogique afin de créer un compagnon d’étude pratique et performant.",
      },
      en: {
        h2: "Korean Flashcards",
        p: "learn Korean the fun way",
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
      },
      ko: {
        h2: "Korean Flashcards",
        p: "재미있게 한국어 배우기",
        description:
          "Korean Flashcards는 사용자가 간격 반복(SRS)을 통해 한국어 어휘를 효율적으로 암기할 수 있도록 설계된 독립형 학습 플랫폼입니다. JSON 기반 로컬 API와 연결된 완전한 React 애플리케이션으로 구축되었으며, 900개 이상의 단어와 표현을 제공하는 인터랙티브 플래시카드 시스템을 포함하고 있습니다. 이 프로젝트는 스마트 학습 도구를 설계하고, SRS 로직을 구현하며, 모든 기기에서 부드러운 사용자 경험을 만드는 능력을 보여줍니다.",

        context:
          "프리랜서 작업과 개인 개발의 일환으로, 나는 학습자들이 여행, K-드라마, 혹은 장기적인 언어 학습 등 자신의 속도에 맞춰 한국어를 공부할 수 있도록 돕기 위해 Korean Flashcards를 만들었습니다. 이 플랫폼은 SRS(간격 반복 시스템), 모바일 친화적 UI, 그리고 JSON 서버를 통해 제공되는 커스텀 데이터를 포함하고 있습니다. 홈 화면에는 학습 철학, 도구의 강점, 그리고 문맥에 따라 달라지는 어휘에 대한 중요한 안내가 담겨 있습니다. 이 프로젝트는 사용자가 데스크탑, 태블릿, 스마트폰 어디에서든 플래시카드를 이용해 한국어를 학습할 수 있도록 합니다.",

        Objectives:
          "어휘 암기에 특화된 완전한 React 애플리케이션을 개발한다. 장기 기억을 최적화하기 위해 간격 반복(spaced repetition) 시스템을 구현한다. 900개가 넘는 한국어 단어와 표현을 저장하고 제공하기 위해 로컬 JSON API를 설정한다. 깔끔하고 반응형이며 사용자 친화적인 프론트엔드 인터페이스를 구축한다. 명확한 플래시카드 로직(보이기/숨기기, 점수, 다음 단어, 진행도)을 통해 학습자에게 매일 연습 세션을 제공한다. 학습 방법, 그 장점, 그리고 번역 정확도와 관련된 중요한 사항을 설명하는 안내용 콘텐츠를 추가한다.",

        SkillsDeveloped:
          "React 개발 : 컴포넌트 기반 아키텍처, hooks를 활용한 상태 관리, 동적 렌더링, 재사용 가능한 UI 패턴. API 및 데이터 처리 : 대규모 어휘 데이터를 제공하고 실제 API 상호작용을 시뮬레이션하기 위해 JSON Server 사용. 학습 시스템 설계 : 간격 반복 로직, 기억 점수, 인터랙티브 플래시카드 동작 구현. UI/UX : 모든 기기에서 사용 가능한 접근성 높은 반응형 인터페이스 구축. 콘텐츠 구성 : 교육 콘텐츠 작성 및 사용자의 학습 경험을 안내. 문제 해결 : 데이터 불일치 관리 및 번역 정확도 향상.",

        Results:
          "900개 이상의 한국어 단어와 표현을 지원하는 완전한 어휘 학습 플랫폼. 기억 유지력을 높이는 완전하게 작동하는 간격 반복 시스템. 데스크탑, 태블릿, 모바일에서 모두 접근 가능한 반응형 React 인터페이스. 도구의 작동 방식을 명확하고 체계적으로 설명하는 홈 화면. 한국어 학습자를 위한 몰입도 높고 효율적인 학습 경험. 이 프로젝트는 개발 역량과 교육 설계를 결합하여 실용적이고 강력한 학습 도구를 만들어낸다.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/koreanFlashcards",
      "Netlify: https://koreanflashcards.netlify.app/",
    ],
  },

  {
    src: kStudyHubImg,
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    translations: {
      fr: {
        h2: "K-Study Hub",
        p: "Dictionnaire Coréen-Français & Quiz Interactif",
        description:
          "K-Study Hub est une application web moderne d'apprentissage du coréen combinant un dictionnaire coréen-français bidirectionnel et un système de quiz interactif. Développée avec Next.js 16 et React 19, elle offre une recherche puissante alimentée par l'API officielle KRDict, un quiz aléatoire de plus de 500 mots de vocabulaire, un système de favoris persistant et un historique de recherche. Le projet démontre ma capacité à créer une application full-stack moderne avec une UX soignée, des thèmes clair/sombre et une architecture prête pour le déploiement.",
        context:
          "Passionné par la langue coréenne, j'ai développé K-Study Hub pour créer un outil d'apprentissage complet et accessible. L'application utilise l'API officielle du dictionnaire coréen (KRDict - 한국어기초사전) pour fournir des définitions précises avec traductions françaises. Le quiz utilise un vocabulaire statique de plus de 500 mots couvrant 25+ catégories (famille, nourriture, verbes, couleurs, expressions, etc.) pour garantir une expérience fiable sans dépendre des quotas API. L'interface moderne avec mode clair/sombre s'adapte automatiquement aux préférences système.",
        Objectives:
          "Développer une application Next.js complète avec App Router et Server Components. Intégrer l'API KRDict pour la recherche bidirectionnelle coréen-français et français-coréen. Créer un système de quiz interactif avec plus de 500 mots de vocabulaire organisés par catégories. Implémenter la persistance locale avec localStorage (favoris, historique, scores, préférences de thème). Concevoir une interface responsive et accessible avec support des thèmes clair/sombre. Préparer l'application pour un déploiement sur Vercel avec gestion des variables d'environnement.",
        SkillsDeveloped:
          "Next.js & React : App Router, Server Components, route handlers API, hooks personnalisés (useLocalStorageState), architecture modulaire. TypeScript : typage strict des données API, interfaces pour les entrées de dictionnaire et les questions de quiz. API Integration : consommation de l'API KRDict XML, parsing avec fast-xml-parser, gestion des erreurs et fallbacks. UI/UX moderne : Tailwind CSS v4, thèmes dynamiques, animations CSS, design responsive mobile-first. Persistance côté client : gestion de l'état avec localStorage, hydratation SSR correcte, synchronisation des préférences utilisateur.",
        Results:
          "Une application dictionnaire pleinement fonctionnelle avec recherche bidirectionnelle coréen-français. Un quiz interactif de plus de 500 mots avec suivi du score et réinitialisation possible. Un système de favoris permettant de sauvegarder les mots importants. Un historique de recherche avec horodatage et direction. Une interface moderne responsive avec mode clair/sombre automatique. Une application prête pour la production déployable sur Vercel ou Netlify.",
      },
      en: {
        h2: "K-Study Hub",
        p: "Korean-French Dictionary & Interactive Quiz",
        description:
          "K-Study Hub is a modern Korean learning web application combining a bidirectional Korean-French dictionary and an interactive quiz system. Built with Next.js 16 and React 19, it features powerful search powered by the official KRDict API, a random quiz with over 500 vocabulary words, a persistent favorites system, and search history. The project demonstrates my ability to create a modern full-stack application with polished UX, light/dark themes, and deployment-ready architecture.",
        context:
          "Passionate about the Korean language, I developed K-Study Hub to create a comprehensive and accessible learning tool. The application uses the official Korean Dictionary API (KRDict - 한국어기초사전) to provide accurate definitions with French translations. The quiz uses a static vocabulary of 500+ words covering 25+ categories (family, food, verbs, colors, expressions, etc.) to ensure a reliable experience without depending on API quotas. The modern interface with light/dark mode automatically adapts to system preferences.",
        Objectives:
          "Develop a complete Next.js application with App Router and Server Components. Integrate the KRDict API for bidirectional Korean-French and French-Korean search. Create an interactive quiz system with over 500 vocabulary words organized by categories. Implement local persistence with localStorage (favorites, history, scores, theme preferences). Design a responsive and accessible interface with light/dark theme support. Prepare the application for deployment on Vercel with environment variable management.",
        SkillsDeveloped:
          "Next.js & React: App Router, Server Components, API route handlers, custom hooks (useLocalStorageState), modular architecture. TypeScript: strict typing of API data, interfaces for dictionary entries and quiz questions. API Integration: consuming KRDict XML API, parsing with fast-xml-parser, error handling and fallbacks. Modern UI/UX: Tailwind CSS v4, dynamic themes, CSS animations, mobile-first responsive design. Client-side persistence: state management with localStorage, proper SSR hydration, user preference synchronization.",
        Results:
          "A fully functional dictionary application with bidirectional Korean-French search. An interactive quiz with 500+ words featuring score tracking and reset capability. A favorites system allowing users to save important words. Search history with timestamps and direction indicators. A modern responsive interface with automatic light/dark mode. A production-ready application deployable to Vercel or Netlify.",
      },
      ko: {
        h2: "K-Study Hub",
        p: "한국어-프랑스어 사전 & 인터랙티브 퀴즈",
        description:
          "K-Study Hub는 양방향 한국어-프랑스어 사전과 인터랙티브 퀴즈 시스템을 결합한 현대적인 한국어 학습 웹 애플리케이션입니다. Next.js 16와 React 19로 구축되었으며, 공식 국립국어원 KRDict API를 활용한 강력한 검색 기능, 500개 이상의 어휘를 포함한 랜덤 퀴즈, 즐겨찾기 시스템, 검색 기록 기능을 제공합니다. 이 프로젝트는 세련된 UX, 라이트/다크 테마, 배포 준비가 완료된 아키텍처를 갖춘 현대적인 풀스택 애플리케이션을 만드는 나의 역량을 보여줍니다.",
        context:
          "한국어에 대한 열정으로 종합적이고 접근하기 쉬운 학습 도구를 만들기 위해 K-Study Hub를 개발했습니다. 이 애플리케이션은 공식 한국어 사전 API(KRDict - 한국어기초사전)를 사용하여 프랑스어 번역이 포함된 정확한 정의를 제공합니다. 퀴즈는 25개 이상의 카테고리(가족, 음식, 동사, 색상, 표현 등)를 포함한 500개 이상의 정적 어휘를 사용하여 API 할당량에 의존하지 않고 안정적인 경험을 보장합니다. 라이트/다크 모드가 있는 현대적인 인터페이스는 시스템 설정에 자동으로 적응합니다.",
        Objectives:
          "App Router와 Server Components를 사용한 완전한 Next.js 애플리케이션을 개발한다. 양방향 한국어-프랑스어 및 프랑스어-한국어 검색을 위해 KRDict API를 통합한다. 카테고리별로 구성된 500개 이상의 어휘를 포함한 인터랙티브 퀴즈 시스템을 만든다. localStorage를 사용한 로컬 영속성을 구현한다(즐겨찾기, 기록, 점수, 테마 설정). 라이트/다크 테마를 지원하는 반응형이고 접근성 높은 인터페이스를 설계한다. 환경 변수 관리와 함께 Vercel 배포를 준비한다.",
        SkillsDeveloped:
          "Next.js & React: App Router, Server Components, API 라우트 핸들러, 커스텀 훅(useLocalStorageState), 모듈형 아키텍처. TypeScript: API 데이터의 엄격한 타이핑, 사전 항목 및 퀴즈 질문을 위한 인터페이스. API 통합: KRDict XML API 사용, fast-xml-parser로 파싱, 에러 처리 및 폴백. 현대적인 UI/UX: Tailwind CSS v4, 동적 테마, CSS 애니메이션, 모바일 우선 반응형 디자인. 클라이언트 사이드 영속성: localStorage를 사용한 상태 관리, 올바른 SSR 하이드레이션, 사용자 설정 동기화.",
        Results:
          "양방향 한국어-프랑스어 검색이 가능한 완전히 기능하는 사전 애플리케이션. 점수 추적 및 초기화 기능이 있는 500개 이상의 어휘를 포함한 인터랙티브 퀴즈. 중요한 단어를 저장할 수 있는 즐겨찾기 시스템. 타임스탬프와 방향 표시기가 있는 검색 기록. 자동 라이트/다크 모드가 있는 현대적인 반응형 인터페이스. Vercel 또는 Netlify에 배포 가능한 프로덕션 준비 애플리케이션.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/K-Study-Hub",
      "Vercel: https://k-study-hub.vercel.app/",
    ],
  },

  {
    src: BookiImg,
    tech: ["HTML", "CSS"],

    translations: {
      fr: {
        h2: "Booki",
        p: "Site de réservation de logements",
        description:
          "Booki est une plateforme web conçue pour aider les utilisateurs à trouver des hébergements et des activités dans la ville de leur choix. En tant que développeur Front-End sur le projet, j’étais responsable d’intégrer l’ensemble de l’interface utilisateur en utilisant un HTML et un CSS propres et sémantiques, tout en collaborant étroitement avec le CTO et la designeuse UI. Ce projet met en valeur ma capacité à transformer des maquettes professionnelles en une interface totalement fonctionnelle et responsive.",

        context:
          "L’entreprise avait besoin d’un site permettant aux utilisateurs de parcourir des hébergements et des activités selon la localisation. La designeuse UI a livré les maquettes finales, et le CTO a fourni un document technique détaillé contenant toutes les spécifications et contraintes de design. J’ai reçu la structure du projet, incluant un fichier HTML initial, un dossier CSS avec du code de base, ainsi que toutes les images nécessaires. Ma mission était d’intégrer l’ensemble de l’interface, de suivre précisément le design system et de garantir un rendu responsive et cohérent sur tous les appareils.",

        Objectives:
          "Intégrer l’ensemble de la maquette Booki en HTML et CSS. Suivre les spécifications fournies dans la note technique. Maintenir l’architecture de fichiers donnée par le CTO. Compléter et améliorer le code HTML et CSS de base tout en conservant une structure propre et sémantique. Assurer une responsivité complète et un alignement correct des composants. Respecter la précision au pixel près avec les maquettes du designer. Livrer le dossier final contenant tous les fichiers complétés au CTO.",

        SkillsDeveloped:
          "Intégration Front-End : structure HTML sémantique, CSS propre et modulaire, mise en page avec Flexbox, Grid et techniques de responsive design. Design to Code : traduction d’une maquette Figma en une interface fidèle au pixel près, respect des guidelines UI, systèmes de couleurs, règles d’espacement et cohérence des composants. Structure de projet : maintien de l’architecture fournie et organisation correcte des assets. Collaboration technique : travail avec un CTO pour les contraintes techniques et avec une designeuse UI pour la fidélité visuelle. Standards professionnels : utilisation des bases de l’accessibilité, des points de rupture responsive et optimisation des images pour la performance.",

        Results:
          "Une intégration complète, responsive et visuellement fidèle des maquettes Booki en HTML et CSS pur. Un code propre et bien structuré livré au CTO. Une mise en page correspondant parfaitement aux attentes du designer sur desktop, tablette et mobile. Ce projet a posé une base solide en intégration front-end et a marqué le début de la création d’interfaces web de qualité professionnelle.",
      },
      en: {
        h2: "Booki",
        p: "Housing booking website",
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
      },
      ko: {
        h2: "Booki",
        p: "숙소 예약 웹사이트",
        description:
          "Booki는 사용자가 원하는 도시에서 숙박 시설과 액티비티를 찾을 수 있도록 설계된 웹 플랫폼입니다. 프론트엔드 개발자로서, 나는 CTO와 UI 디자이너와 긴밀히 협력하며 깔끔하고 시멘틱한 HTML과 CSS를 사용해 전체 사용자 인터페이스를 구현하는 역할을 맡았습니다. 이 프로젝트는 전문적인 목업을 완전하고 반응형 인터페이스로 구현하는 나의 역량을 보여줍니다.",

        context:
          "회사는 사용자가 위치에 따라 숙박 시설과 액티비티를 탐색할 수 있는 웹사이트가 필요했습니다. UI 디자이너는 최종 목업을 전달했고, CTO는 모든 디자인 사양과 제약이 포함된 상세 기술 문서를 제공했습니다. 나는 초기 HTML 파일, 기본 코드가 있는 CSS 폴더, 그리고 필요한 모든 이미지를 포함한 프로젝트 구조를 전달받았습니다. 나의 역할은 전체 인터페이스를 통합하고, 디자인 시스템을 정확하게 준수하며, 모든 기기에서 일관되게 반응형 레이아웃을 보장하는 것이었습니다.",

        Objectives:
          "HTML과 CSS를 사용하여 전체 Booki 목업을 통합한다. 기술 요약서에 제공된 디자인 사양을 따른다. CTO가 제공한 파일 구조를 유지한다. 시멘틱하고 깔끔한 마크업을 유지하며 HTML 및 CSS 기본 코드를 완성하고 개선한다. 완전한 반응형 구현과 올바른 컴포넌트 정렬을 보장한다. 디자이너의 목업과 픽셀 단위로 정확히 일치시키는다. 모든 파일이 완성된 최종 프로젝트 폴더를 CTO에게 제출한다.",

        SkillsDeveloped:
          "프론트엔드 통합: 시멘틱 HTML 구조, 깔끔하고 모듈화된 CSS, Flexbox, Grid 및 반응형 디자인 기술을 활용한 레이아웃 구현. 디자인 → 코드: Figma 목업을 픽셀 단위로 정확한 인터페이스로 변환하며 UI 가이드라인, 색상 시스템, 여백 규칙, 컴포넌트 일관성을 준수. 파일 및 프로젝트 구조: 제공된 아키텍처를 유지하고 에셋을 올바르게 구성. 기술 협업: 기술적 제약을 제시하는 CTO 및 시각적 완성도를 요구하는 UI 디자이너와의 협업. 전문 표준: 접근성 기본 원칙, 반응형 브레이크포인트, 성능을 위한 이미지 최적화 적용.",

        Results:
          "순수 HTML과 CSS를 사용해 Booki 목업을 완전히, 반응형으로, 시각적으로 정확하게 구현한 결과물. CTO에게 전달된 깔끔하고 잘 구조화된 코드베이스. 데스크톱, 태블릿, 모바일 전반에서 디자이너의 요구와 완벽히 일치하는 레이아웃. 이 프로젝트는 프론트엔드 통합의 탄탄한 기반을 다져주었으며, 전문적인 웹 인터페이스 구축의 시작점이 되었습니다.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/Charlet_Lucas_1_Booki_042025",
      "Github Pages: https://aitoheiw.github.io/Charlet_Lucas_1_Booki_042025/",
    ],
  },
  {
    src: OhMyImg,

    tech: ["HTML", "SCSS"],

    translations: {
      fr: {
        h2: "Oh My Food",
        p: "Site de réservation de repas",
        description:
          "OhMyFood est une application web mobile-first permettant de présenter les menus de restaurants gastronomiques tout en offrant aux clients la possibilité de pré-sélectionner leurs plats afin que le repas soit prêt dès leur arrivée. En tant que développeur Front-End, j’étais responsable de construire toute l’interface responsive à partir des maquettes Figma, d’implémenter des animations CSS fluides et d’organiser l’ensemble des styles avec SASS. Ce projet démontre ma capacité à offrir une expérience utilisateur moderne, animée et parfaitement optimisée pour mobile, tablette et desktop.",

        context:
          "L’équipe commerciale de l’entreprise a sécurisé quatre restaurants partenaires, et le CTO a décidé que la première version de la plateforme inclurait quatre menus complets. Il a fourni les maquettes mobile et desktop, les assets (images et textes), ainsi que le prototype Figma interactif détaillant les animations à reproduire. Avec ce matériel et un brief créatif, ma mission était de développer toute l’interface en adoptant une approche mobile-first stricte, de suivre le design system et d’implémenter des animations CSS/SASS élégantes comme indiqué dans le prototype.",

        Objectives:
          "Développer un site entièrement responsive en adoptant une approche mobile-first. Intégrer toutes les pages à partir des maquettes Figma mobile et desktop. Utiliser SASS pour structurer et modulariser la base de code CSS. Implémenter les animations présentes dans le prototype Figma (animations de chargement, effets d’apparition des menus, transitions des boutons, etc.). Assurer une cohérence entre les vues mobile, tablette et desktop. Respecter le brief créatif et livrer une interface soignée, prête pour la production.",

        SkillsDeveloped:
          "Intégration Front-End : développement mobile-first, mises en page responsives, HTML sémantique et architecture SCSS propre (pattern 7-1, partials, mixins, variables). Techniques d’animation : implémentation de keyframes, transitions, délais, effets en cascade et interactions fluides inspirées du prototype Figma. Design to Code : traduction fidèle des maquettes, respect des espacements, typographies, icônes et structure des composants. Performance & optimisation : structuration SASS maintenable, optimisation des assets et utilisation de sélecteurs efficaces. Collaboration professionnelle : travail avec un CTO et un UX designer, compréhension des contraintes de design et communication des choix techniques (notamment concernant les animations).",

        Results:
          "Un site mobile-first complet incluant quatre menus de restaurants entièrement intégrés. Une mise en page responsive et cohérente sur tous les appareils. Une base de code SASS propre et évolutive suivant les bonnes pratiques. Des animations CSS entièrement conformes au prototype Figma. Une expérience utilisateur soignée mettant en avant des menus interactifs, des transitions fluides et des effets visuels élégants — prête à être utilisée dans un contexte réel.",
      },
      en: {
        h2: "Oh My Food",
        p: "Meal booking website",
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
      },
      ko: {
        h2: "Oh My Food",
        p: "식사 예약 웹사이트",
        description:
          "OhMyFood는 고객이 미리 음식을 선택하여 도착과 동시에 식사가 준비되도록 하는 동시에, 고급 레스토랑의 메뉴를 소개하는 모바일 우선(web mobile-first) 웹 애플리케이션입니다. 프론트엔드 개발자로서 나는 Figma 목업을 기반으로 전체 반응형 인터페이스를 구축하고, 부드러운 CSS 애니메이션을 구현하며, 모든 스타일을 SASS로 구조화하는 역할을 맡았습니다. 이 프로젝트는 모바일·태블릿·데스크톱 전반에 걸쳐 세련되고 현대적이며 애니메이션이 포함된 사용자 경험을 제공하는 나의 역량을 보여줍니다.",

        context:
          "회사의 영업팀은 네 개의 제휴 레스토랑을 확보했으며, CTO는 플랫폼의 첫 번째 버전에 네 가지 완전한 메뉴를 포함하기로 결정했습니다. 그는 모바일 및 데스크톱 목업, 에셋(이미지 및 텍스트), 그리고 재현해야 할 애니메이션이 포함된 인터랙티브 Figma 프로토타입을 제공했습니다. 이러한 자료와 크리에이티브 브리프를 바탕으로, 나의 임무는 엄격한 모바일 우선 접근 방식으로 전체 인터페이스를 개발하고, 디자인 시스템을 준수하며, 프로토타입에 표시된 세련된 CSS/SASS 애니메이션을 구현하는 것이었습니다.",

        Objectives:
          "모바일 우선 접근 방식을 사용하여 완전한 반응형 웹사이트를 개발한다. 모바일 및 데스크톱 Figma 목업을 기반으로 모든 페이지를 통합한다. CSS 코드베이스를 구조화하고 모듈화하기 위해 SASS를 사용한다. Figma 프로토타입에 표시된 애니메이션(로딩 애니메이션, 메뉴 등장 효과, 버튼 전환 등)을 구현한다. 모바일·태블릿·데스크톱 간의 일관성을 보장한다. 크리에이티브 브리프를 준수하고 프로덕션 수준의 세련된 인터페이스를 제공한다.",

        SkillsDeveloped:
          "프론트엔드 통합: 모바일 우선 개발, 반응형 레이아웃, 시멘틱 HTML, 깔끔한 SCSS 아키텍처(7-1 패턴, 파셜, 믹스인, 변수). 애니메이션 기술: keyframe 애니메이션, 트랜지션, 지연, 계단식 효과, 부드러운 UI 상호작용 구현. 디자인 → 코드: 목업을 정확히 변환하고, 여백, 타이포그래피, 아이콘, 컴포넌트 구조를 준수한다. 성능 및 최적화: 유지보수가 용이한 SASS 구조화, 에셋 최적화, 효율적인 선택자 사용. 전문 협업: CTO 및 UX 디자이너와 협업하며 디자인 제약을 이해하고 기술적 선택(특히 애니메이션 로직)을 명확히 설명한다.",

        Results:
          "네 개의 레스토랑 메뉴가 모두 통합된 완전한 모바일 우선 웹사이트. 모든 기기에서 일관되고 반응형인 레이아웃. 모범 사례를 따른 깔끔하고 확장 가능한 SASS 코드베이스. Figma 프로토타입과 완벽하게 일치하는 CSS 애니메이션. 실제 서비스에도 사용할 수 있을 만큼 세련된 사용자 경험으로, 인터랙티브 메뉴, 부드러운 전환, 우아한 시각 효과를 제공한다.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_4_OhMyFood_Charlet_Lucas",
      "GitHub Pages: https://aitoheiw.github.io/Projet_4_OhMyFood_Charlet_Lucas/",
    ],
  },
  {
    src: PrintImg,
    tech: ["HTML", "CSS", "JavaScript"],
    translations: {
      fr: {
        h2: "Print It",
        p: "Site d’impression",
        description:
          "Print It est une petite entreprise familiale spécialisée dans l’impression, cherchant à moderniser son site statique en y ajoutant des éléments dynamiques. En tant que développeur Front-End freelance, j’ai été recruté pour améliorer l’expérience utilisateur grâce à un carrousel interactif conforme aux exigences du directeur. Ce projet met en avant ma capacité à transformer des retours clients en un composant UI fonctionnel, élégant et responsive.",

        context:
          "Print It avait besoin de donner plus de dynamisme à son site afin de mieux présenter ses services d’impression. Le directeur de l’entreprise m’a contacté avec une vidéo détaillée expliquant précisément le comportement attendu du carrousel : transitions fluides, navigation claire et visuels soignés. Ma mission consistait à concevoir et implémenter ce carrousel depuis zéro, en veillant à ce qu’il s’intègre parfaitement au site existant tout en améliorant l’ergonomie et l’esthétique.",

        Objectives:
          "Créer un carrousel d’images entièrement fonctionnel et responsive. Implémenter des transitions et interactions fluides d’après les instructions vidéo du client. Garantir la compatibilité avec la structure statique existante du site. Maintenir un code propre, accessible et optimisé. Fournir une solution améliorant la présentation visuelle et engageant davantage les utilisateurs.",

        SkillsDeveloped:
          "Développement Front-End : création d’un carrousel personnalisé en HTML, CSS et JavaScript sémantiques. Amélioration UI/UX : conception d’animations fluides, flèches de navigation, indicateurs et timings de transition conformément à la vision du client. Responsive Design : adaptation du carrousel à différentes tailles d’écran. Collaboration client : traduction d’instructions vidéo non techniques en implémentation technique précise. Qualité du code : écriture d’un code modulaire, maintenable et optimisé.",

        Results:
          "Un carrousel interactif entièrement personnalisé et conforme aux attentes du client. Des animations fluides et une navigation intuitive améliorant fortement l’attrait visuel du site. Un composant responsive s’intégrant harmonieusement à la mise en page existante. Un client satisfait et une première expérience freelance réussie, renforçant la confiance et démontrant une fiabilité professionnelle.",
      },
      en: {
        h2: "Print It",
        p: "Printing website",
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
      },
      ko: {
        h2: "Print It",
        p: "인쇄 웹사이트",
        description:
          "Print It는 정적인 웹사이트에 동적 요소를 추가하여 현대화하려는 가족 운영의 소규모 인쇄 회사입니다. 프론트엔드 개발자로서 나는 감독의 요구 사항에 기반한 인터랙티브 캐러셀을 통해 사용자 경험을 향상시키기 위해 프리랜서로 고용되었습니다. 이 프로젝트는 고객의 피드백을 기능적이고 우아하며 반응형 UI 컴포넌트로 구현하는 나의 능력을 보여줍니다.",

        context:
          "Print It은 인쇄 서비스를 더 잘 보여주기 위해 웹사이트에 더 많은 생동감을 불어넣을 필요가 있었습니다. 회사의 감독은 원하는 캐러셀 동작(부드러운 전환, 명확한 내비게이션, 깔끔한 비주얼)을 자세히 설명한 영상을 보내며 나에게 의뢰했습니다. 나의 임무는 캐러셀을 처음부터 디자인하고 구현하여 기존 사이트에 자연스럽게 녹아들면서도 사용성과 시각적 매력을 향상시키는 것이었습니다.",

        Objectives:
          "완전히 기능적이고 반응형인 이미지 캐러셀을 만든다. 클라이언트의 영상 지시에 기반해 부드러운 전환과 상호작용을 구현한다. 기존 정적 사이트 구조와의 호환성을 보장한다. 깔끔하고 접근 가능하며 최적화된 코드를 유지한다. 시각적 표현을 강화하고 사용자 참여를 높이는 솔루션을 제공한다.",

        SkillsDeveloped:
          "프론트엔드 개발: 시멘틱 HTML, CSS, JavaScript를 사용하여 커스텀 캐러셀 구현. UI/UX 향상: 부드러운 애니메이션, 내비게이션 화살표, 인디케이터, 전환 타이밍 설계. 반응형 디자인: 다양한 화면 크기에 맞게 캐러셀을 조정. 클라이언트 협업: 비기술적 영상 설명을 정확한 기술 구현으로 변환. 코드 품질: 모듈화되고 유지보수 가능하며 최적화된 코드 작성.",

        Results:
          "고객의 기대에 완전히 부합하는 맞춤 제작 인터랙티브 캐러셀. 사이트의 시각적 매력을 크게 향상시키는 부드러운 애니메이션과 직관적인 내비게이션. 기존 레이아웃에 자연스럽게 통합되는 반응형 컴포넌트. 첫 프리랜스 경험에서 고객 만족을 이끌어내며 신뢰와 전문성을 입증한 프로젝트.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_5_Print_it_Charlet_Lucas",
      "GitHub Pages: https://aitoheiw.github.io/Projet_5_Print_it_Charlet_Lucas/",
    ],
  },
  {
    src: SophieImg,
    tech: ["HTML", "CSS", "JavaScript"],
    translations: {
      fr: {
        h2: "Sophie Bluel",
        p: "Portfolio de designer",
        description:
          "Ce projet consistait à améliorer le site existant d’une architecte en développant des fonctionnalités front-end dynamiques basées sur un nouveau design Figma. En tant que développeur Front-End rejoignant l’équipe, mon rôle était de créer des fonctionnalités clés telles qu’une galerie dynamique, une page de connexion administrateur et une modale pour l’upload de médias. Le projet mettait l’accent sur le développement de composants, l’interaction avec l’API, l’intégration UI et l’amélioration de l’expérience utilisateur d’un front-end statique existant.",

        context:
          "Le lundi matin, le brief d’équipe présentait tous les éléments essentiels du projet. Le chef de projet a fourni le design Figma, le code de l’API back-end, le front-end statique original et le tableau Kanban contenant les tâches assignées. J’étais responsable de transformer le portfolio statique de l’architecte en une interface dynamique et interactive. Mes trois missions principales étaient : développer la page de galerie, créer la page de connexion administrateur depuis zéro et construire une modale permettant aux utilisateurs authentifiés d’ajouter de nouveaux médias. Avec tous les assets et bases de code fournis, j’étais prêt à commencer le développement.",

        Objectives:
          "Implémenter la galerie de projets de l’architecte à partir du HTML statique fourni, en la rendant dynamique grâce aux données de l’API. Développer la page de connexion administrateur depuis zéro, incluant la logique d’authentification et la gestion des erreurs. Construire la modale d’upload depuis zéro, permettant aux utilisateurs authentifiés d’ajouter de nouveaux médias et de mettre à jour instantanément la galerie. Intégrer précisément le nouveau design Figma, assurer la responsivité et connecter toutes les fonctionnalités front-end à l’API pour la persistance des données.",

        SkillsDeveloped:
          "Développement Front-End : manipulation du DOM, gestion des événements, rendu dynamique, JavaScript modulaire et consommation d’API REST. Intégration UI : implémentation d’un design Figma avec précision au pixel, structure responsive et interactions intuitives. Systèmes d’authentification : création d’un flux de connexion, gestion des tokens, routes protégées et accès sécurisé aux outils admin. Architecture de composants : création de la modale d’upload incluant l’aperçu des fichiers, la validation des formulaires et l’actualisation en direct de la galerie. Workflow projet : utilisation d’un Kanban, collaboration avec un PM et travail avec un codebase et une API existants.",

        Results:
          "Une galerie entièrement dynamique affichant en temps réel les projets récupérés depuis l’API. Une page de connexion administrateur complète et fonctionnelle avec une authentification sécurisée. Une modale personnalisée pour l’upload de médias, connectée à l’API, permettant de mettre à jour la galerie instantanément. Un front-end moderne, responsive et interactif conforme au design Figma. Le projet a considérablement amélioré l’expérience utilisateur du site de l’architecte et démontré de solides compétences en intégration front-end et en résolution de problèmes.",
      },
      en: {
        h2: "Sophie Bluel",
        p: "Designer’s portfolio",
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
      },
      ko: {
        h2: "Sophie Bluel",
        p: "디자이너 포트폴리오",
        description:
          "이 프로젝트는 새로운 Figma 디자인을 기반으로 동적 프론트엔드 기능을 개발하여 기존 건축가 웹사이트를 업그레이드하는 것이었습니다. 프론트엔드 개발자로 팀에 합류한 나는 동적 갤러리, 관리자 로그인 페이지, 미디어 업로드용 모달 등 핵심 기능을 구현하는 역할을 맡았습니다. 이 프로젝트는 컴포넌트 개발, API 연동, UI 통합, 그리고 기존 정적 프론트엔드의 사용자 경험 향상에 중점을 두었습니다.",

        context:
          "월요일 아침, 팀 브리핑에서는 프로젝트의 모든 핵심 정보가 공유되었습니다. 프로젝트 매니저는 Figma 디자인, 백엔드 API 코드, 기존 정적 프론트엔드, 그리고 작업이 배정된 칸반 보드를 제공했습니다. 나는 정적이던 건축가 포트폴리오를 동적이고 인터랙티브한 인터페이스로 변환하는 책임을 맡았습니다. 세 가지 주요 임무는 다음과 같았습니다: 건축가 갤러리 페이지 개발, 관리자 로그인 페이지를 처음부터 구축, 인증된 사용자가 새 미디어를 업로드할 수 있는 모달 제작. 모든 에셋과 코드베이스가 제공된 상태였기에 개발을 시작할 준비가 되었습니다.",

        Objectives:
          "제공된 정적 HTML을 기반으로 건축가의 프로젝트 갤러리를 API 데이터를 활용한 동적 페이지로 구현한다. 관리자 로그인 페이지를 처음부터 개발하며 인증 로직과 에러 처리를 포함한다. 인증된 사용자가 새 미디어를 업로드하고 갤러리가 즉시 갱신되도록 업로드 모달을 처음부터 구축한다. 새로운 Figma 디자인을 정확하게 반영하고, 반응형 구조를 보장하며, 모든 프론트엔드 기능을 백엔드 API와 연결해 데이터가 유지되도록 한다.",

        SkillsDeveloped:
          "프론트엔드 개발: DOM 조작, 이벤트 처리, 동적 렌더링, 모듈형 JavaScript, REST API 사용. UI 통합: 픽셀 단위 정확도로 새로운 Figma 디자인을 구현하고, 반응형 구조 및 직관적 상호작용 제공. 인증 시스템: 로그인 플로우 생성, 토큰 처리, 보호된 라우트 관리, 관리자 도구에 대한 안전한 접근 보장. 컴포넌트 아키텍처: 파일 미리보기, 폼 검증, 실시간 갤러리 갱신 기능을 포함한 업로드 모달을 처음부터 구축. 프로젝트 워크플로우: 칸반 사용, PM과 협업, 기존 코드베이스 및 API를 활용한 개발.",

        Results:
          "API에서 가져온 실제 프로젝트를 표시하는 완전한 동적 갤러리 페이지. 안전한 인증 로직을 포함한 완전한 관리자 로그인 페이지. API와 연결되어 갤러리를 실시간으로 업데이트할 수 있는 맞춤 제작 업로드 모달. Figma 디자인에 맞춘 현대적이고 반응형이며 인터랙티브한 프론트엔드. 이 프로젝트는 건축가 웹사이트의 전체 UX를 크게 향상시켰으며, 강력한 프론트엔드 문제 해결 및 통합 능력을 입증했습니다.",
      },
    },

    links: ["GitHub: https://github.com/Aitoheiw/Projet_6_Sophie_Bluel-"],
  },
  {
    src: KasaImg,
    tech: ["React", "CSS"],

    translations: {
      fr: {
        h2: "KASA",
        p: "Plateforme de location immobilière",
        description:
          "Kasa est une grande plateforme française de location d’appartements entre particuliers, avec des centaines d’annonces publiées chaque jour. En tant que développeur Front-End freelance, j’ai été recruté pour reconstruire toute l’interface utilisateur en React, en suivant les nouveaux designs Figma. La mission consistait à créer une application entièrement responsive, développer des composants réutilisables, gérer la navigation avec React Router et produire un code de haute qualité tout en utilisant un dataset JSON en l’absence de l’équipe back-end.",

        context:
          "Le site de Kasa avait été initialement construit il y a plus de dix ans en ASP.NET et avait accumulé beaucoup de code legacy. Laura, la CTO, a lancé une refonte complète avec une stack JavaScript moderne : Node.js pour le back-end et React pour le front-end. Le recrutement back-end étant retardé, elle m’a fourni un fichier JSON contenant les dernières annonces afin que je puisse développer tout le front-end de manière autonome. La designeuse a partagé le design system complet Figma basé sur les composants, les prototypes interactifs et les exigences fonctionnelles telles que le comportement de la galerie et des menus déroulants. Avec tous les assets, guidelines et contraintes, j’étais prêt à démarrer le projet React.",

        Objectives:
          "Configurer le projet React avec Vite selon les guidelines de Kasa. Développer tous les composants de l’interface à partir du design system Figma. Implémenter des mises en page responsives pour desktop, tablette et mobile. Construire toute la navigation et la structure de routing avec React Router. Implémenter les composants fonctionnels tels que la Galerie d’images avec navigation en boucle, et le système de Collapse avec ouverture/fermeture interactive. Remplacer les assets temporaires par les images réelles du dataset JSON. Garantir une fidélité totale aux prototypes Figma, incluant animations et détails d’interaction.",

        SkillsDeveloped:
          "Développement React : architecture basée sur les composants, gestion des props, état local, éléments UI réutilisables et rendu conditionnel. Routing : mise en place de React Router, routes dynamiques, gestion des erreurs et pages fallback. Implémentation UI/UX : transformation des designs Figma en composants responsives et pixel-perfect, reproduction des animations prototypes et gestion du recadrage et contraintes d’images. Logique fonctionnelle : implémentation des galeries en boucle, des systèmes de collapse et des comportements personnalisés des composants. Autonomie projet : développement d’un front-end complet sans équipe back-end, utilisation des données JSON, respect des guidelines et collaboration avec une CTO et une designeuse.",

        Results:
          "Une application React complète et entièrement responsive, structurée avec Vite et correspondant parfaitement aux designs Figma. Une bibliothèque robuste de composants incluant Galerie, Collapse, Header, Footer, listes de tags et pages de détails des logements. Des comportements fonctionnels fluides comme la navigation infinie dans la galerie et les collapses interactifs. Un code propre, maintenable et réutilisable conforme aux guidelines techniques de Kasa. Une refonte réussie démontrant la transition d’un ancien site ASP.NET vers une architecture front-end moderne en JavaScript.",
      },
      en: {
        h2: "KASA",
        p: "Real estate rental platform",
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
      },
      ko: {
        h2: "KASA",
        p: "부동산 임대 플랫폼",
        description:
          "Kasa는 매일 수백 개의 새로운 매물이 게시되는 프랑스의 대표적인 개인 간 아파트 임대 플랫폼입니다. 프리랜서 프론트엔드 개발자로서 나는 새로운 Figma 디자인을 기반으로 전체 사용자 인터페이스를 React로 재구축하는 작업을 맡았습니다. 이 프로젝트는 완전 반응형 애플리케이션 구축, 재사용 가능한 컴포넌트 개발, React Router를 통한 라우팅 관리, 그리고 백엔드 팀이 부재한 상황에서 JSON 데이터를 활용하여 고품질 코드를 제공하는 것을 요구했습니다.",

        context:
          "Kasa의 웹사이트는 10년 이상 전에 ASP.NET으로 구축되어 많은 레거시 코드를 포함하고 있었습니다. CTO인 Laura는 현대적인 JavaScript 스택(백엔드는 Node.js, 프론트엔드는 React)을 사용한 전체 리디자인을 시작했습니다. 백엔드 채용이 지연되는 동안, 나는 최신 매물이 포함된 JSON 파일을 제공받아 전체 프론트엔드를 독립적으로 개발할 수 있었습니다. 디자이너는 컴포넌트 기반의 Figma 디자인 시스템, 인터랙티브 프로토타입, 갤러리 동작 및 접을 수 있는 메뉴와 같은 기능 요구사항을 공유했습니다. 모든 디자인 자산, 개발 가이드라인 및 제약 조건이 갖춰진 상태에서 React 프로젝트를 시작할 준비가 되었습니다.",

        Objectives:
          "Kasa의 코딩 가이드라인에 따라 Vite로 React 프로젝트를 설정한다. Figma 디자인 시스템을 기반으로 모든 인터페이스 컴포넌트를 개발한다. 데스크톱, 태블릿, 모바일 전반에서 반응형 레이아웃을 구현한다. React Router를 사용해 전체 내비게이션 및 라우팅 구조를 구축한다. 이미지 갤러리(루프 네비게이션 포함) 및 인터랙티브 열림/닫힘 기능의 Collapse 시스템 등 기능적 컴포넌트를 구현한다. 플레이스홀더 자산을 JSON 데이터셋의 실제 이미지로 교체한다. 애니메이션 및 상호작용 디테일을 포함해 Figma 프로토타입과 완전히 일치하도록 구현한다.",

        SkillsDeveloped:
          "React 개발: 컴포넌트 기반 아키텍처, props 관리, 로컬 상태, 재사용 가능한 UI 요소, 조건부 렌더링. 라우팅: React Router 설정, 동적 라우트, 에러 처리, 폴백 페이지. UI/UX 구현: Figma 디자인을 반응형·픽셀 단위 정확도로 변환하고, 프로토타입 애니메이션을 재현하며 이미지 크롭 및 레이아웃 제약을 관리. 기능 로직: 루프 갤러리, Collapse 동작, 사용자 정의 컴포넌트 로직 구현. 프로젝트 자율성: 백엔드 팀 없이 JSON 데이터로 전체 프론트엔드를 구축하고, 코딩 가이드라인을 준수하며 CTO 및 디자이너와 협업.",

        Results:
          "Vite 기반으로 구조화되고 Figma 디자인과 완벽하게 일치하는 완전 반응형 React 애플리케이션. 갤러리, Collapse, 헤더, 푸터, 태그 리스트, 주택 상세 페이지 등 견고한 컴포넌트 라이브러리 구축. 무한 갤러리 네비게이션 및 인터랙티브 Collapse와 같은 매끄러운 기능 동작. Kasa의 기술 가이드라인을 준수하는 깔끔하고 유지보수 가능하며 재사용 가능한 코드. 레거시 ASP.NET에서 현대적 JavaScript 프론트엔드 아키텍처로의 전환을 성공적으로 입증한 리디자인.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_7_Kasa-FR_Charlet_Lucas",
      "Netlify: https://projet-7-kasa.netlify.app/",
    ],
  },
  {
    src: NinaImg,

    tech: ["React", "JavaScript"],

    translations: {
      fr: {
        h2: "Nina Carducci",
        p: "Portfolio de photographe",
        description:
          "Nina Carducci est une photographe professionnelle spécialisée dans le portrait et l’événementiel, dont le site portfolio nécessitait une optimisation approfondie pour améliorer la vitesse de chargement, l’accessibilité et les performances SEO. En tant que développeur Front-End freelance, je l’ai contactée de manière proactive avec un audit complet, puis j’ai réalisé l’ensemble des optimisations de performance, d’accessibilité et de SEO. Ce projet démontre ma capacité à analyser un site existant, mettre en place des améliorations ciblées et fournir des résultats mesurables à une cliente réelle.",

        context:
          "Lors de ma prospection freelance, j’ai analysé le site de Nina Carducci et constaté des lenteurs de chargement ainsi que plusieurs problèmes SEO. Après lui avoir envoyé un audit, elle s’est montrée intéressée et a organisé un appel pour discuter de ses besoins. À la suite de cet échange, elle a confirmé ses attentes par email : optimisation globale des performances, amélioration SEO, mise en place d’un référencement local avec Schema.org, ajout des métadonnées sociales, corrections d’accessibilité et création d’un rapport détaillé avant/après optimisation. Elle m’a également fourni les informations de son entreprise pour les données structurées ainsi qu’un accès à son dépôt GitHub pour travailler sur une branche dédiée.",

        Objectives:
          "Réaliser une optimisation complète des performances et du SEO du site. Améliorer le poids des images et la structure du code pour réduire le temps de chargement. Ajouter des données structurées pour le référencement local via Schema.org. Implémenter les métadonnées Open Graph et Twitter Card pour les aperçus sur les réseaux sociaux. Appliquer les améliorations d’accessibilité recommandées par les audits Wave et Lighthouse. Fournir un rapport d’optimisation détaillé incluant les métriques avant/après et la liste de toutes les modifications techniques.",

        SkillsDeveloped:
          "Optimisation SEO & Performance : compression d’images, lazy loading, nettoyage du code, amélioration des métadonnées, optimisation du caching et ajustements de la structure sémantique. SEO technique : rédaction de données structurées Schema.org pour entreprises locales, ajout des balises Open Graph et Twitter Card, optimisation du sitemap et des règles d’indexation. Accessibilité : correction des contrastes, amélioration du HTML sémantique, correction des attributs ARIA et meilleure compatibilité avec les lecteurs d’écran. Audit & Reporting : réalisation d’analyses Lighthouse et Wave, documentation des problèmes, explication des corrections et présentation des améliorations mesurables. Collaboration client : prospection, définition du périmètre, gestion des attentes et livraison d’un package d’optimisation professionnel.",

        Results:
          "Un site de photographe nettement plus rapide et performant, avec un potentiel SEO amélioré. Intégration complète des données structurées renforçant la visibilité en recherche locale. Un HTML plus propre, plus sémantique et plus accessible. Des images optimisées et une structure de code améliorée réduisant le temps de chargement. Un rapport professionnel avant/après livré à la cliente, démontrant des améliorations claires et vérifiées par audit. Une cliente satisfaite et une démonstration réussie de compétences techniques en SEO et optimisation de performance.",
      },
      en: {
        h2: "Nina Carducci",
        p: "Photographer’s portfolio",
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
      },
      ko: {
        h2: "Nina Carducci",
        p: "사진작가 포트폴리오",
        description:
          "Nina Carducci는 인물 사진과 이벤트 촬영을 전문으로 하는 프로 사진작가로, 그녀의 포트폴리오 웹사이트는 로딩 속도, 접근성, SEO 성능을 향상시키기 위한 전반적인 최적화가 필요했습니다. 프리랜서 프론트엔드 개발자로서 나는 먼저 전체 사이트 감사 보고서를 보내며 직접 연락했고, 이후 성능, 접근성, SEO 최적화를 모두 수행했습니다. 이 프로젝트는 기존 사이트를 분석하고, 필요한 개선을 정확히 적용하며, 실제 고객에게 측정 가능한 결과를 제공하는 나의 능력을 보여줍니다.",

        context:
          "프리랜서 클라이언트를 찾는 과정에서 나는 Nina Carducci의 사진 사이트를 분석했고, 느린 로딩 속도와 여러 SEO 문제를 발견했습니다. 그녀에게 감사 보고서를 보낸 후 관심을 보였고, 요구 사항을 논의하기 위한 통화를 예약했습니다. 이후 이메일을 통해 그녀는 명확한 기대 사항을 전달했습니다 : 전반적인 성능 최적화, SEO 개선, Schema.org를 활용한 로컬 SEO 설정, 소셜 메타 태그 추가, 접근성 수정, 그리고 최적화 전/후를 비교하는 상세 보고서 제출. 그녀는 구조화된 데이터 작성을 위한 로컬 비즈니스 정보와 GitHub 저장소 접근 권한도 제공했습니다.",

        Objectives:
          "웹사이트의 성능과 SEO에 대한 전체 최적화를 수행한다. 이미지 용량과 코드 구조를 개선해 로딩 시간을 단축한다. Schema.org를 사용해 로컬 SEO용 구조화 데이터를 추가한다. 소셜 미디어 미리보기를 위한 Open Graph 및 Twitter Card 메타데이터를 구현한다. Wave 및 Lighthouse 감사 결과에 기반한 접근성 개선을 적용한다. 모든 기술적 변경 사항과 전/후 수치를 포함한 상세한 최적화 보고서를 제공한다.",

        SkillsDeveloped:
          "SEO 및 성능 최적화 : 이미지 압축, 레이지 로딩, 코드 정리, 메타데이터 개선, 캐싱 최적화, 시멘틱 구조 조정. 기술 SEO : 로컬 비즈니스를 위한 Schema.org 구조화 데이터 작성, Open Graph 및 Twitter Card 태그 추가, 사이트맵 및 인덱싱 규칙 최적화. 접근성 : 대비 문제 수정, 시멘틱 HTML 개선, ARIA 속성 수정, 스크린 리더 호환성 향상. 감사 및 보고서 작성 : Lighthouse 및 Wave 분석 수행, 문제 문서화, 수정 사항 설명 및 측정된 개선 결과 제시. 클라이언트 협업 : 발굴, 범위 협의, 기대 관리 및 전문적인 최적화 패키지 제공.",

        Results:
          "로딩 속도와 성능이 크게 향상된 사진 포트폴리오 사이트. 로컬 검색 노출을 강화하는 구조화 데이터 완전 통합. 더 깨끗하고 시멘틱하며 접근성 높은 HTML. 최적화된 이미지와 개선된 코드 구조로 로딩 시간 감소. 감사 지표로 뒷받침되는 명확한 개선 사항을 포함한 전문적인 전/후 최적화 보고서 제공. 만족한 고객과 기술적 SEO 및 성능 최적화 능력을 입증하는 성공적인 프로젝트.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_8_NinaCarducci-Opti",
      "Github Pages: https://aitoheiw.github.io/Projet_8_NinaCarducci-Opti/",
    ],
  },
  {
    src: EventsImg,

    tech: ["React", "JavaScript"],

    translations: {
      fr: {
        h2: "724 Events",
        p: "Plateforme de gestion d’événements",
        description:
          "724events est une agence spécialisée dans l’organisation d’événements, en préparation du lancement de la nouvelle version de son site vitrine one-page. En tant que développeur Front-End freelance, j’ai été recruté pour débugger, finaliser et valider l’intégration commencée par un précédent développeur. Cette mission met en avant ma capacité à auditer un code existant, corriger des problèmes UI/UX complexes et livrer un site pleinement fonctionnel et fiable, prêt pour la mise en production.",

        context:
          "724events m’a contacté après que leur premier développeur freelance a dû quitter le projet pour des raisons personnelles. Bien que le site soit globalement fonctionnel, plusieurs bugs empêchaient une expérience fluide. Lors d’une visioconférence, j’ai rencontré le Directeur Marketing, qui m’a détaillé les attentes ainsi que les problèmes à corriger. Il m’a ensuite envoyé l’intégralité du code du projet, accompagnée d’une section 'Issues' résumant les notes du développeur précédent, ainsi qu’un cahier de recette partiellement rempli à terminer. Ma mission consistait à débugger le site, compléter les fonctionnalités manquantes et finaliser le cahier de recette avec l’ensemble des scénarios nécessaires à la validation.",

        Objectives:
          "Corriger tous les bugs listés dans les Issues GitHub du projet ainsi que ceux identifiés lors de la réunion client. Assurer un comportement pleinement responsive et fonctionnel sur l’ensemble du site one-page. Améliorer la cohérence UI et corriger les bugs de mise en page, design ou interaction. Compléter et mettre à jour le cahier de recette en ajoutant des scénarios de validation complets. Préparer une version stable et prête pour la production afin de respecter la date de lancement de l’agence.",

        SkillsDeveloped:
          "Débogage & optimisation : inspection de code existant, résolution de problèmes logiques et UI, amélioration de la structure et des performances. Intégration Front-End : correction de problèmes de layout CSS, d’incohérences de composants, de bugs responsive et d’erreurs d’accessibilité. Assurance qualité : finalisation du cahier de recette, rédaction de scénarios et vérification du comportement du site selon les attentes. Continuité de projet : reprise d’un codebase existant, compréhension du travail d’un autre développeur et finalisation de tâches en cours. Communication client : collaboration avec le Directeur Marketing, clarification des attentes et transmission régulière de l’avancement.",

        Results:
          "Un site one-page entièrement fonctionnel, stable et responsive, prêt pour la mise en ligne. Tous les bugs signalés ont été corrigés et les interactions utilisateur sont désormais cohérentes sur tous les appareils. Un cahier de recette complet et professionnel a été livré, couvrant tous les scénarios nécessaires à la validation et à la maintenance future. L’agence a obtenu une version finale fiable de son site vitrine et a pu poursuivre son lancement sans retard.",
      },
      en: {
        h2: "724 Events",
        p: "Event management platform",
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
      },
      ko: {
        h2: "724 Events",
        p: "이벤트 관리 플랫폼",
        description:
          "724events는 원페이지 쇼케이스 웹사이트의 새로운 버전을 출시하기 위해 준비 중인 이벤트 관리 에이전시입니다. 프리랜서 프론트엔드 개발자로서 나는 이전 개발자가 시작한 통합 작업을 디버깅하고 완성하며 검증하는 역할을 맡았습니다. 이 프로젝트는 기존 코드를 감사하고, 복잡한 UI/UX 문제를 해결하며, 프로덕션에 바로 투입할 수 있는 안정적인 웹사이트를 제공하는 나의 역량을 보여줍니다.",

        context:
          "724events는 초기 프리랜서 개발자가 개인 사정으로 프로젝트를 떠나게 되자 나에게 연락했습니다. 사이트는 대부분 기능했지만, 여러 버그가 사용자 경험을 방해하고 있었습니다. 화상 미팅 동안 나는 마케팅 이사와 만나 기대 사항과 수정해야 할 문제들에 대해 자세히 들었습니다. 이후 그는 전체 프로젝트 코드와 함께 이전 개발자의 메모가 요약된 'Issues' 섹션, 그리고 완성되지 않은 테스트 계획(레시피 시트)을 보내주었습니다. 나의 임무는 사이트의 버그를 수정하고, 누락된 기능을 완성하며, 검증에 필요한 모든 테스트 시나리오로 레시피 시트를 최종 완성하는 것이었습니다.",

        Objectives:
          "프로젝트의 GitHub Issues에 나열된 모든 문제와 미팅 중 확인된 버그를 디버깅한다. 원페이지 전체에서 완전한 반응형 및 기능적 동작을 보장한다. UI 일관성을 개선하고, 레이아웃·디자인·인터랙션 관련 버그를 수정한다. 전체 테스트 계획을 보완하고 포괄적인 검증 시나리오를 추가한다. 에이전시의 출시 기한에 맞춰 안정적인 프로덕션 준비 버전을 제공한다.",

        SkillsDeveloped:
          "디버깅 & 최적화: 기존 코드 분석, 논리 및 UI 문제 해결, 구조 및 성능 개선. 프론트엔드 통합: CSS 레이아웃 문제, 컴포넌트 불일치, 반응형 오류, 접근성 문제 수정. 품질 보증: 테스트 계획(레시피 시트) 완성, 시나리오 작성, 예상 동작과 실제 동작 검증. 프로젝트 인수: 기존 코드베이스 이해, 다른 개발자의 작업 파악, 미완성 작업 완료. 클라이언트 커뮤니케이션: 마케팅 이사와 협업, 기대 사항 명확화, 진행 상황 보고.",

        Results:
          "완전히 기능적이고 안정적이며 반응형인 원페이지 웹사이트를 제공. 이전에 보고된 모든 버그가 수정되었으며, 사용자 인터랙션이 모든 기기에서 일관되게 동작. 장기 유지보수를 위한 모든 검증 시나리오가 포함된 전문적인 테스트 계획 제공. 에이전시는 신뢰할 수 있는 최종 버전의 사이트를 제공받아 더 이상 지연 없이 출시를 진행할 수 있었습니다.",
      },
    },

    links: [
      "GitHub: https://github.com/Aitoheiw/Projet_9_Debuggez-une-application-React-Charlet-Lucas",
    ],
  },
];
export default SLIDES;
