import Container from "@/components/layout/Container";
import FeaturedProject from "@/components/work/FeaturedProject";

export default function Home() {
  return (
    <main>
      <section className="py-24 sm:py-32">
        <Container>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            Engineering &amp; applied AI
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Artificial Integrations
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            Applied AI systems, automation, APIs, and production software.
          </p>
        </Container>
      </section>

      <section id="work" className="scroll-mt-16 border-t border-border/80 py-24 sm:py-28">
        <Container>
          <div className="mb-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted">
              Work
            </h2>
          </div>
          <FeaturedProject />
        </Container>
      </section>

      <section id="about" className="scroll-mt-16 border-t border-border/80 py-24">
        <Container>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted">
            About
          </h2>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-16 border-t border-border/80 py-24">
        <Container>
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted">
            Contact
          </h2>
        </Container>
      </section>
    </main>
  );
}
