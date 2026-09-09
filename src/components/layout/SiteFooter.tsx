import Container from "./Container";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 py-8 text-sm text-muted">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Artificial Integrations
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono text-xs">artificialintegrations.dev</span>
            <a
              href="https://github.com/hirschem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
