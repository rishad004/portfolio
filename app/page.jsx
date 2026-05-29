import PortfolioExperience from "./PortfolioExperience";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammed Rishad",
  jobTitle: "Senior Back-End Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rishad004.github.io",
  image: "/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "IN"
  },
  email: "mailto:rishadpullissery@gmail.com",
  telephone: "+917902903790",
  sameAs: [
    "https://github.com/rishad004",
    "https://www.linkedin.com/in/muhammed-rishad-a43a132aa/"
  ],
  knowsAbout: [
    "Golang",
    "Node.js",
    "Backend Development",
    "Microservices",
    "REST APIs",
    "gRPC",
    "PostgreSQL",
    "Docker",
    "Kubernetes"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PortfolioExperience />
    </>
  );
}
