import { site, siteUrl } from "@/content/site";

// one @graph emitted once from the root layout, so nothing is duplicated per component.
// every value is read from content/site.ts, so the markup cannot contradict the page
export function StructuredData() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;

  const sameAs = [
    site.contact.github,
    site.contact.linkedin,
    site.contact.x,
    site.contact.instagram,
  ].filter(Boolean);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: siteUrl,
        image: `${siteUrl}${site.portraitUrl}`,
        jobTitle: site.role,
        email: `mailto:${site.contact.email}`,
        description: site.tagline,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Toronto",
          addressRegion: "ON",
          addressCountry: "CA",
        },
        alumniOf: site.education.map((school) => ({
          "@type": "EducationalOrganization",
          name: school.school,
          url: school.url,
        })),
        knowsAbout: site.skills.flatMap((group) => group.items),
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: site.name,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      ...site.projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        creator: { "@id": personId },
        ...(project.sourceUrl ? { codeRepository: project.sourceUrl } : {}),
        ...(project.demoUrl ? { url: project.demoUrl } : {}),
        ...(project.imageUrl ? { image: `${siteUrl}${project.imageUrl}` } : {}),
        keywords: project.tech.join(", "),
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      // the payload is built from our own typed content, never user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
