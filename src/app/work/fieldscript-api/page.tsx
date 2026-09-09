import type { Metadata } from "next";
import Link from "next/link";
import ApiContractExample from "@/components/case-study/ApiContractExample";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import FieldscriptArchitecture from "@/components/case-study/FieldscriptArchitecture";
import FieldscriptRequestFlow from "@/components/case-study/FieldscriptRequestFlow";
import JobLifecycle from "@/components/case-study/JobLifecycle";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Fieldscript API | Artificial Integrations",
  description:
    "Production-style FastAPI backend focused on validation, traceability, structured errors, and predictable API behavior.",
};

const technologies = [
  "Python",
  "FastAPI",
  "Pydantic",
  "SQLAlchemy",
  "Alembic",
  "pytest",
  "Docker",
];

export default function FieldscriptApiPage() {
  return (
    <main>
      <section className="py-20 sm:py-28">
        <Container>
          <Link
            href="/#work"
            className="font-mono text-xs tracking-[0.16em] text-muted uppercase hover:text-foreground"
          >
            &lt;- Back to Work
          </Link>
          <div className="mt-16 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
              03 / Backend Engineering
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Fieldscript API
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Backend API Engineering
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground sm:text-xl">
              A production-style FastAPI backend designed around strict
              contracts, predictable failures, and traceable request behavior.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {["Python", "FastAPI", "Pydantic", "SQLAlchemy"].map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/hirschem/fieldscript-api"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground"
            >
              View source on GitHub -&gt;
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <CaseStudySection eyebrow="01 / Problem" title="APIs usually fail at the edges.">
          <p className="text-base leading-7 text-muted">
            A backend can appear correct when every request is valid, small,
            authenticated, and perfectly formed. Production behavior becomes
            harder when requests exceed payload limits, contain invalid data,
            reference the wrong project, fail authentication, hit rate limits,
            request missing resources, or trigger internal errors.
          </p>
          <p className="mt-5 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Fieldscript was built around making those cases explicit and
            predictable.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="02 / API Contract"
          title="Predictable behavior is part of the interface."
        >
          <p className="text-base leading-7 text-muted">
            Fieldscript defines consistent behavior around structured error
            responses, request IDs, explicit status codes, project-scoped
            resources, and validation boundaries. Error paths carry request-level
            traceability where implemented, so a failure remains connected to
            the request that produced it.
          </p>
          <div className="mt-8">
            <ApiContractExample />
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="03 / Request Lifecycle"
          title="Middleware and contract handling surround endpoint logic."
          wide
        >
          <FieldscriptRequestFlow />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="04 / Payload Boundaries"
          title="Validate the real payload, not its encoding."
        >
          <p className="text-base leading-7 text-muted">
            The OCR endpoint accepts base64 image payloads and enforces limits
            using estimated decoded byte size rather than raw base64 string
            length. This per-image and total decoded-size validation avoids
            unnecessary decoding just to enforce the boundary.
          </p>
          <ul className="mt-6 grid gap-3 font-mono text-xs leading-5 text-muted sm:grid-cols-2">
            <li className="border border-border px-4 py-3">Decoded-size limits per image</li>
            <li className="border border-border px-4 py-3">Decoded-size limit across the request</li>
            <li className="border border-border px-4 py-3">Explicit 413 response</li>
            <li className="border border-border px-4 py-3">PAYLOAD_TOO_LARGE error code</li>
            <li className="border border-border px-4 py-3">Request ID in response body</li>
            <li className="border border-border px-4 py-3">Request ID in response header</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="05 / Asynchronous OCR"
          title="Longer work becomes a job, not a blocked request."
        >
          <p className="text-base leading-7 text-muted">
            <span className="break-all font-mono text-foreground">POST /v1/projects/&#123;project_id&#125;/ocr</span>{" "}
            validates project scope and payload size, creates a unique job ID,
            stores a pending job, schedules OCR work with FastAPI BackgroundTasks,
            and returns HTTP 202. A polling route exposes the state and returns
            the result only after completion.
          </p>
          <div className="mt-6 border border-border bg-surface/40 p-4 sm:p-5">
            <p className="break-all font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              GET /v1/projects/&#123;project_id&#125;/jobs/&#123;job_id&#125;
            </p>
            <div className="mt-5">
              <JobLifecycle />
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-muted">
            The current job store is application-level and in-process. This is
            explicit asynchronous request handling and job-state modeling, not a
            claim of a distributed queue or durable external job system. The
            polling route also verifies that the job belongs to the requested
            project.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="06 / Project Scope"
          title="Resources stay inside their project boundary."
        >
          <p className="text-base leading-7 text-muted">
            Project-scoped routes use the path project ID as a boundary. The
            application rejects mismatches where an optional project ID header
            conflicts with the route project, and OCR jobs are checked against
            project ownership before results are returned.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Explicit scope checks keep one project context from accidentally
            retrieving another project&apos;s job state.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="07 / API-Key Lifecycle"
          title="Authentication includes lifecycle, not just validation."
        >
          <p className="text-base leading-7 text-muted">
            The project-scoped API-key routes support creating, listing, and
            revoking keys through dependency-based authentication. Stored public
            metadata can include a key prefix, name, creation time, last-used
            time, and revoked time where available.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-muted">
            {["create key", "list keys", "revoke key", "project scope", "dependency auth"].map(
              (item) => (
                <span key={item} className="border border-border px-3 py-2">
                  {item}
                </span>
              ),
            )}
          </div>
          <p className="mt-6 break-all font-mono text-xs leading-5 text-muted">
            /api/projects/&#123;project_id&#125;/api-keys
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="08 / Error Normalization"
          title="Failure should still follow the contract."
        >
          <p className="text-base leading-7 text-muted">
            Explicit handlers cover request validation errors, FastAPI HTTP
            exceptions, and unhandled exceptions. The application normalizes
            failures into an <span className="font-mono text-foreground">error_code</span>,{" "}
            <span className="font-mono text-foreground">message</span>, and{" "}
            <span className="font-mono text-foreground">request_id</span> shape,
            preserving HTTPException response headers where needed.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            Unhandled errors are logged with traceback context while the client
            receives a controlled response without internal exception details.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="09 / Request Traceability"
          title="Every request needs a thread to follow."
        >
          <p className="text-base leading-7 text-muted">
            Request-ID middleware stores an identifier in request context,
            returns it through the <span className="font-mono text-foreground">x-request-id</span>{" "}
            response header, and includes it in structured errors. Request
            logging and request-context middleware make that identifier available
            across the request lifecycle.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Traceability is designed into the request contract rather than added
            only after something fails.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="10 / Middleware"
          title="Operational controls belong at the boundary."
        >
          <p className="text-base leading-7 text-muted">
            The FastAPI application includes middleware for request IDs, request
            logging, request context, rate limiting, CORS, and security headers.
            It also exposes health and version routes, with development-only
            debug behavior kept separate from the normal request path.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="11 / Persistence"
          title="Persistence is treated as schema, not an implementation detail."
          wide
        >
          <p className="max-w-3xl text-base leading-7 text-muted">
            SQLAlchemy database infrastructure, session management, models, and
            API-key storage are paired with Alembic configuration and migrations.
            Database evolution is versioned rather than left to manual schema
            changes.
          </p>
          <div className="mt-8 grid gap-2 sm:grid-cols-5 sm:items-center sm:gap-3">
            {[
              "API Layer",
              "Dependency / Store",
              "SQLAlchemy",
              "Database Schema",
              "Alembic Migrations",
            ].map((item, index, items) => (
              <div key={item} className="flex items-center gap-2 sm:block">
                <div className="flex-1 border border-border bg-surface px-4 py-4 text-sm text-foreground">
                  {item}
                </div>
                {index < items.length - 1 ? (
                  <span className="font-mono text-xs text-accent sm:block sm:py-2 sm:text-center" aria-hidden="true">
                    -&gt;
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="12 / Testing"
          title="Edge cases are part of the specification."
        >
          <p className="text-base leading-7 text-muted">
            The visible test suite covers API keys, database API-key smoke
            behavior, health, OCR jobs, and request logging. Repository
            documentation also describes contract testing around payload limits,
            boundary behavior, and request consistency.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Tests verify externally observable API contracts, not only internal
            implementation details. Boundary behavior is treated as part of the
            API specification.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="13 / Containerization" title="Runtime assumptions stay explicit.">
          <p className="text-base leading-7 text-muted">
            A Dockerfile, docker-compose.yml, dependency files, and a local
            Uvicorn development path keep containerized and deployment-oriented
            runtime assumptions visible without introducing claims about cloud
            orchestration.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="14 / Architecture"
          title="Contract handling surrounds the service layer."
          wide
        >
          <FieldscriptArchitecture />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="15 / Engineering Principle"
          title="Correctness includes the failure path."
        >
          <p className="text-base leading-7 text-muted">
            Fieldscript demonstrates backend engineering where reliability is
            defined not only by successful requests, but by how consistently the
            system handles malformed, oversized, unauthorized, mismatched,
            missing, and failing requests.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Predictable failure is a feature of a reliable API.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="16 / Technology" title="A backend stack built around explicit boundaries.">
          <ul className="flex max-w-3xl flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-muted">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </CaseStudySection>

        <section className="border-t border-border/80 py-20 sm:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#work"
              className="font-mono text-xs tracking-[0.16em] text-muted uppercase hover:text-foreground"
            >
              &lt;- Back to selected work
            </Link>
            <a
              href="https://github.com/hirschem/fieldscript-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-foreground"
            >
              View source on GitHub -&gt;
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}
