import Container from "@/components/layout/Container";
import SelectedWork from "@/components/work/SelectedWork";
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
          <SelectedWork />
        </Container>
      </section>

      <section id="about" className="scroll-mt-16 border-t border-border/80 py-24 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                About
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                Applied systems, built for production.
              </h2>
            </div>
            <div className="max-w-2xl text-base leading-7 text-muted">
              <p>
                I build applied AI and software systems with a focus on reliability,
                automation, and production use. My work spans AI applications, APIs,
                data pipelines, trading infrastructure, and client-facing software.
              </p>
              <p className="mt-5">
                Artificial Integrations is the professional home for that work — from
                deterministic backend systems and automated workflows to carefully
                scoped AI integrations where the model adds real value.
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-foreground">
                {[
                  "Applied AI",
                  "Backend Systems",
                  "Automation",
                  "APIs",
                  "Data Pipelines",
                  "Production Software",
                ].map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-16 border-t border-border/80 py-24 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Have a system to build?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                Reach out about engineering work, AI systems, software development,
                collaboration, or a focused project.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 text-sm">
              <span className="font-medium text-muted">Email address pending</span>
              <a
                href="https://github.com/hirschem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                GitHub -&gt;
              </a>
              <span className="font-mono text-xs text-muted">
                artificialintegrations.dev
              </span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
