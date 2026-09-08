import Container from "./Container";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 py-8 text-sm text-muted">
      <Container>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} Artificial Integrations
          </p>
          <a
            href="https://github.com/hirschem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}
