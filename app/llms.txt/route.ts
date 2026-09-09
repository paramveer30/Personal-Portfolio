import { site, siteUrl } from "@/content/site";

// served at /llms.txt. generated rather than static so the links and the role list
// stay correct when content/site.ts changes
export const dynamic = "force-static";

export function GET() {
  const roles = site.experience
    .map(
      (role) =>
        `- ${role.title}, ${role.company} (${role.start} to ${role.end})`,
    )
    .join("\n");

  const projects = site.projects
    .map(
      (project) =>
        `- [${project.title}](${siteUrl}/#projects): ${project.description}`,
    )
    .join("\n");

  const schools = site.education
    .map(
      (school) =>
        `- ${school.credential}, ${school.school} (${school.start} to ${school.end})`,
    )
    .join("\n");

  const body = `# ${site.name}

> ${site.role} at McMaster University, working across software, embedded systems and hardware diagnostics.

${site.bio.join("\n\n")}

## About
- [About](${siteUrl}/#about): background, how he approaches a system, and what he is working on now.
- Based in ${site.location}. ${site.availability}.

## Experience
${roles}

- [Experience](${siteUrl}/#experience): full detail on both roles.

## Education
${schools}

- [Education](${siteUrl}/#education): coursework, honours, clubs and teams.

## Projects
${projects}

- [Projects](${siteUrl}/#projects): write ups, screenshots and source links.

## Skills
${site.skills.map((group) => `- ${group.category}: ${group.items.join(", ")}`).join("\n")}

## Contact
- [Contact](${siteUrl}/#contact): message form.
- Email: ${site.contact.email}
- GitHub: ${site.contact.github}
- LinkedIn: ${site.contact.linkedin}
- Resume: ${siteUrl}${site.resumeUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
