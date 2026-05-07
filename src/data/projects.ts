export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  role: string;
  duration: string;
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  logoSrc?: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: "rattil",
    title: "Rattil",
    description: "Subscription-based Quran Packages app built using Flutter from scratch.",
    longDescription: "Rattil is a sophisticated subscription-based mobile application designed to offer comprehensive Quranic learning packages. Built from the ground up using Flutter, the app focuses on a seamless user experience for both Android and iOS users. A core feature of Rattil is its robust monetization system, achieved through the integration of RevenueCat for managing complex in-app purchase workflows.",
    techStack: ["Flutter", "Dart", "RevenueCat", "In-App Purchases", "REST APIs", "Provider"],
    features: [
      "Custom subscription management with RevenueCat",
      "Dynamic Quran package delivery via REST APIs",
      "Offline reading capabilities",
      "Scalable clean architecture using Provider",
      "Cross-platform consistency for iOS and Android"
    ],
    role: "Flutter App Developer",
    duration: "3 Months",
    images: ["/projects/rattil-1.png", "/projects/rattil-2.png"],
    logoSrc: "/rattil_logo.png"
  },
  {
    slug: "al-athar",
    title: "Al Athar",
    description: "Location-based app for discovering Islamic historical places.",
    longDescription: "Al Athar is an innovative exploration tool that helps users discover and learn about Islamic historical sites. By leveraging Google Maps and advanced geofencing, the app provides real-time proximity alerts as users approach historically significant locations. The app also features a Text-to-Speech (TTS) engine to deliver audio tours, making history accessible on the go.",
    techStack: ["Flutter", "Google Maps", "TTS", "Geofencing", "Firebase Notifications"],
    features: [
      "Interactive map with custom historical markers",
      "Real-time geofencing and proximity notifications",
      "Multi-language Text-to-Speech audio delivery",
      "Interactive user galleries for each location",
      "User-contributed ratings and reviews"
    ],
    role: "Full Stack Flutter Developer",
    duration: "4 Months",
    images: ["/projects/al-athar-1.png", "/projects/al-athar-2.png"]
  },
  {
    slug: "tiremate",
    title: "TireMate",
    description: "Mobile app connecting vehicle owners with nearby mechanics.",
    longDescription: "TireMate is an on-demand service platform that bridges the gap between stranded vehicle owners and nearby mechanics. The app features a real-time location tracking system and a unique bidding mechanism where mechanics can bid on repair jobs. It simplifies the emergency repair process with a snappy, intuitive UI built for high-stress situations.",
    techStack: ["Flutter", "Google Maps SDK", "Bidding Logic", "Riverpod", "Real-time Database"],
    features: [
      "Live location tracking for mechanics and users",
      "Real-time bidding system for service providers",
      "In-app chat and call integration",
      "Rating and verification system for trust",
      "Automated payment calculation"
    ],
    role: "Flutter Developer",
    duration: "5 Months",
    images: ["/projects/tiremate-1.png", "/projects/tiremate-2.png"]
  },
  {
    slug: "imechano-user",
    title: "Imechano User App",
    description: "Vehicle maintenance app for managing service schedules.",
    longDescription: "The Imechano User App is a comprehensive vehicle lifecycle management tool. It helps users stay on top of maintenance schedules, store vehicle documents, and receive timely service reminders. My work focused on resolving critical iOS navigation issues and optimizing the notification engine using FCM and APNs for high reliability.",
    techStack: ["Flutter", "FCM", "APNs", "SQLite", "Bloc"],
    features: [
      "Automated maintenance schedule generation",
      "Push notification integration (FCM/APNs)",
      "Secure document storage for vehicle papers",
      "Service history logging and export",
      "Advanced bug fixing and lifecycle management"
    ],
    role: "Senior Mobile Engineer",
    duration: "3 Months",
    images: ["/projects/imechano-user-1.png", "/projects/imechano-user-2.png"]
  },
  {
    slug: "imechano-admin",
    title: "Imechano Admin App",
    description: "Admin app for managing users and backend operations.",
    longDescription: "The Imechano Admin App serves as the backbone of the Imechano platform, allowing administrators to manage users, track service requests, and oversee system health. I led a major version migration for this app, updating legacy dependencies and refactoring core components to ensure long-term stability and performance.",
    techStack: ["Flutter", "State Management", "Migration", "Admin Dashboards", "Unit Testing"],
    features: [
      "Real-time dashboard for service tracking",
      "Comprehensive user and mechanic management",
      "Flutter version and dependency migration",
      "API performance monitoring tools",
      "Exportable data reports and analytics"
    ],
    role: "Mobile Lead & QA Lead",
    duration: "3 Months",
    images: ["/projects/imechano-admin-1.png", "/projects/imechano-admin-2.png"]
  }
];
