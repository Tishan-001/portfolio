// All editable content lives here. Update this file and the whole site updates.

export const profile = {
  name: 'Tishan Shamika',
  role: 'Software Engineer @ Codimite',
  location: 'Hambantota, Sri Lanka',
  email: 'tishan.shamika.dev@gmail.com',
  blurb:
    'Software Engineer at Codimite building full-stack, cloud-native systems. I design clean architectures, secure REST APIs, and containerized deployments on GCP - from first commit to production.',
  philosophy: 'Write clean code, automate everything, and deploy with confidence.',
  // Drop your CV at public/cv.pdf and your photo at public/avatar.jpg
  cv: '/cv.pdf',
  avatar: '/avatar.jpg',
  socials: {
    github: 'https://github.com/Tishan-001',
    linkedin: 'https://linkedin.com/in/tishanshamika',
    x: 'https://x.com/TishanX369',
    instagram: 'https://www.instagram.com/tishan_mihiran',
  },
  stats: [
    { value: '46', label: 'repositories' },
    { value: 'BSc (Hons)', label: 'Computer Engineering' },
    { value: 'Ruhuna', label: 'University of' },
  ],
};

export const stack = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot', '.NET'] },
  { group: 'Languages', items: ['TypeScript', 'Python', 'Go', 'C', 'C++'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'DevOps & Cloud', items: ['Docker · Compose', 'GitHub Actions', 'Nginx', 'Cloudflare', 'Linux (Ubuntu)', 'GCP'] },
];

export const projects = [
  {
    title: 'SLUDI — Backend & Chaincode',
    lang: 'Java · Go',
    desc:
      'A Sri Lanka Unified Digital Identity platform. Built the backend services and Hyperledger chaincode in Go, with secure identity flows backing a web and mobile ecosystem.',
    tags: ['Spring Boot', 'Blockchain', 'Go', 'REST'],
    links: [
      { label: 'Backend', url: 'https://github.com/SLUDI/SLUDI-Backend' },
      { label: 'Chaincode', url: 'https://github.com/SLUDI/SLUDI-Chaincode-Go' },
    ],
  },
  {
    title: 'SLUDI — Web & Mobile',
    lang: 'JavaScript · Dart',
    desc:
      'The user-facing side of the identity platform: a JavaScript web application and a cross-platform Flutter mobile app sharing the same secured API layer.',
    tags: ['React', 'Flutter', 'JWT'],
    links: [
      { label: 'Web', url: 'https://github.com/SLUDI/SLUDI-WebApplication' },
      { label: 'Mobile', url: 'https://github.com/SLUDI/SLUDI-MobileApplication' },
    ],
  },
  {
    title: 'InternLK',
    lang: 'Kotlin',
    desc:
      'A mobile app that bridges the gap between students seeking internships and companies in need of interns — built collaboratively as a dedicated team with a focus on matching and discovery.',
    tags: ['Kotlin', 'Android', 'Team Project'],
    links: [{ label: 'Repository', url: 'https://github.com/Tishan-001/InternLK' }],
  },
  {
    title: 'Pre-School App',
    lang: 'Dart',
    desc:
      'A pre-school application built with Flutter & Firebase to enhance communication and learning, where I led development of several key features for parents, teachers and learners.',
    tags: ['Flutter', 'Firebase', 'Realtime'],
    links: [{ label: 'Repository', url: 'https://github.com/Tishan-001/pre-school' }],
  },
];

export const timeline = [
  {
    when: 'JUL 2026 — PRESENT',
    title: 'Software Engineer',
    org: 'Codimite Pvt Ltd',
    points: [
      'Promoted from Associate Software Engineer after five months',
      'Continuing full-stack development and DevOps work on production systems',
      'Working across Python, Go, .NET, TypeScript, C and C++',
      'Managing DevOps and deployments on GCP',
    ],
  },
  {
    when: 'FEB 2026 — JUN 2026',
    title: 'Associate Software Engineer',
    org: 'Codimite Pvt Ltd',
    points: [
      'Joined as an Associate Software Engineer, contributing across the stack',
      'Built and maintained services using Python, Go, .NET and TypeScript',
      'Worked with C and C++ on lower-level components',
      'Deployed and operated systems on GCP',
      'Promoted to Software Engineer in July 2026',
    ],
  },
  {
    when: 'JUL 2024 — JAN 2025',
    title: 'Software Engineer Intern',
    org: 'HashBaze Pvt Ltd',
    points: [
      'Contributed to full-stack web application development across the stack',
      'Designed and integrated secure REST APIs',
      'Containerized applications with Docker for consistent deployments',
      'Collaborated with cross-functional teams in an Agile environment',
      'Supported production deployments and CI/CD workflows',
    ],
  },
  {
    when: '2021 — JAN 2026',
    title: 'BSc (Hons) in Computer Engineering',
    org: 'Faculty of Engineering, University of Ruhuna',
    points: [
      'Core focus on systems, software engineering and computer architecture',
      'Applied coursework into real full-stack and DevOps team projects',
    ],
  },
];
