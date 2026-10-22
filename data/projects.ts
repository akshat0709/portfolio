/**
 * HOW TO ADD A NEW PROJECT:
 * 1. Add a new object to the `projects` array below with the required fields:
 *    - `slug`: unique URL identifier (used in /projects/[slug])
 *    - `number`: two-digit string ("04", "05", etc.)
 *    - `title`, `tagline`, `category`, `stack`, `highlight`
 *    - `accentColor`: "tomato" | "sunny" | "teal"
 *    - `doodle`: "taxi" | "robot" | "train" (or add a new doodle in components/doodles)
 *    - Optional `liveUrl` and `repoUrl`
 * 2. If creating a dedicated case-study page, add a route at `app/projects/[slug]/page.tsx`.
 *    The sitemap and project index will automatically include the new project.
 */

export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  stack: string[];
  highlight: string;
  liveUrl?: string;
  repoUrl?: string;
  accentColor: "tomato" | "sunny" | "teal";
  doodle: "taxi" | "robot" | "train";
  initialRotation?: number;
  whatIdDoDifferently: string;
}

export const projects: Project[] = [
  {
    slug: "orange-taxi",
    number: "01",
    title: "Orange Taxi: Full-Stack Electric Ride-Hailing Platform",
    tagline:
      "Pre-launch premium 100% electric cab service in Delhi NCR using Mahindra BE.6 electric SUVs for airport transfers and corporate accounts.",
    category: "Web / Production PWA / Flagship",
    stack: [
      "React",
      "TypeScript",
      "TanStack Start",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "PWA",
    ],
    highlight:
      "Built real-time dispatch engine on Supabase Realtime (ride requests, live driver coordinates, in-ride chat) + in-app UPI dynamic QR driver handover flow.",
    liveUrl: "https://orange-taxi.com",
    accentColor: "sunny",
    doodle: "taxi",
    initialRotation: 0,
    whatIdDoDifferently:
      "[WHAT_I_WOULD_DO_DIFFERENTLY_PLACEHOLDER: In future iterations, add optimistic UI updates for offline intermittent mobile networks, and decouple high-frequency driver coordinate streams using an edge message broker before writing to PostgreSQL.]",
  },
  {
    slug: "autonomous-rescue-robot",
    number: "02",
    title: "Autonomous Search and Rescue Robot",
    tagline:
      "Hazardous terrain exploration rover engineered for independent navigation and survivor telemetry in GPS-denied disaster environments.",
    category: "IoT / Embedded / Robotics",
    stack: [
      "C/C++",
      "Microcontrollers",
      "LiDAR/Sensors",
      "Path Planning",
      "Telemetry",
      "Autonomous Logic",
    ],
    highlight:
      "Obstacle detection sensor fusion, real-time hazardous telemetry transmission, path planning in GPS-denied zones, and fail-safe decision logic.",
    repoUrl: "https://github.com/akshat0709/AutonomousSearchAndRescueRobot",
    accentColor: "teal",
    doodle: "robot",
    initialRotation: 0,
    whatIdDoDifferently:
      "[WHAT_I_WOULD_DO_DIFFERENTLY_PLACEHOLDER: In future hardware revisions, incorporate hardware-accelerated SLAM coprocessors and low-frequency mesh telemetry for extended subterranean signal penetration.]",
  },
  {
    slug: "animal-detection",
    number: "03",
    title: "Animal Detection in Locomotive Tracks",
    tagline:
      "Real-time computer vision system processing live locomotive cab video streams to detect track wildlife and prevent collisions.",
    category: "Python / Computer Vision / AI-ML",
    stack: [
      "Python",
      "Computer Vision",
      "Deep Learning",
      "Real-Time Alerts",
      "Video Pipeline",
    ],
    highlight:
      "Low-latency inference on video feeds, real-time alert dispatch to train operators, and emergency safety protocol triggers.",
    repoUrl: "https://github.com/akshat0709/AnimalDetection",
    accentColor: "tomato",
    doodle: "train",
    initialRotation: 0,
    whatIdDoDifferently:
      "[WHAT_I_WOULD_DO_DIFFERENTLY_PLACEHOLDER: In future model versions, deploy quantized TensorRT INT8 models onto rugged edge accelerators to improve night-vision infrared detection fidelity in heavy fog.]",
  },
];
