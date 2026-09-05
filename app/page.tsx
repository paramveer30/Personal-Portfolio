export default function HomePage() {
  return (
    // scroll target for the name link in the header
    <main id="top">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div>
          <h1 className="text-text text-5xl font-bold">Paramveer Multani</h1>
          <p className="text-muted mt-4">Portfolio in progress.</p>
        </div>
      </section>

      {/* empty placeholders, real content lands in later stages */}
      {/* scroll-mt-20 leaves space above the section so the sticky nav does not cover it when you jump here */}
      <section
        id="about"
        className="border-border min-h-[50vh] scroll-mt-20 border-t"
      />
      <section
        id="journey"
        className="border-border min-h-[50vh] scroll-mt-20 border-t"
      />
      <section
        id="experience"
        className="border-border min-h-[50vh] scroll-mt-20 border-t"
      />
      <section
        id="projects"
        className="border-border min-h-[50vh] scroll-mt-20 border-t"
      />
      <section
        id="skills"
        className="border-border min-h-[50vh] scroll-mt-20 border-t"
      />
      <section
        id="contact"
        className="border-border min-h-[50vh] scroll-mt-20 border-t"
      />
    </main>
  );
}
