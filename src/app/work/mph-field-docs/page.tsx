import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import MphArchitecture from "@/components/case-study/MphArchitecture";
import MphScreenshot from "@/components/case-study/MphScreenshot";
import MphWorkflow from "@/components/case-study/MphWorkflow";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "MPH Field Docs | Artificial Integrations",
  description:
    "AI-assisted document automation for converting handwritten field notes into reviewable invoices, PDFs, and document exports.",
};

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "OpenAI",
  "GPT-4.1 Vision",
  "Tailwind CSS",
  "jsPDF",
  "DOCX",
  "FileSaver",
];

export default function MphFieldDocsPage() {
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
              02 / Applied AI System
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              MPH Field Docs
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              AI Document Automation
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground sm:text-xl">
              AI-assisted document automation for turning handwritten field notes
              into structured, reviewable, client-ready output.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {["Next.js", "TypeScript", "GPT-4.1 Vision", "jsPDF"].map(
              (technology) => (
                <span key={technology}>{technology}</span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://mph-vip.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground"
            >
              View live application -&gt;
            </a>
            <a
              href="https://github.com/hirschem/mph-vip"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground"
            >
              View source on GitHub -&gt;
            </a>
          </div>

          <div className="mt-14 max-w-4xl">
            <MphScreenshot
              src="/projects/mph-field-docs/home.png"
              alt="MPH Field Docs home screen showing Invoice Generator and Book Formatting workflows"
              caption="The application separates the billing and book workflows at the entry point."
              width={1936}
              height={1020}
              size="large"
            />
          </div>
        </Container>
      </section>

      <Container>
        <CaseStudySection
          eyebrow="01 / Problem"
          title="From handwritten field notes to usable documents."
        >
          <p className="text-base leading-7 text-muted">
            Contractors often capture estimates, invoices, job notes, and
            project details by hand while working in the field. Turning those
            notes into clean client-facing documents creates repetitive
            administrative work and introduces opportunities for transcription
            mistakes or missing details.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            MPH Field Docs was built to reduce that friction without removing
            human control from the final output.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="02 / Workflow"
          title="AI handles the conversion work. The user controls the final document."
          wide
        >
          <MphWorkflow />
          <div className="mt-10 max-w-4xl">
            <MphScreenshot
              src="/projects/mph-field-docs/invoice-workflow.png"
              alt="MPH Field Docs billing workflow with multiple uploaded images and editable transcription"
              caption="Billing workflow: multiple handwritten images become editable transcription before formatting."
              width={1933}
              height={1264}
              size="large"
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="03 / AI Responsibilities"
          title="Separate transcription from interpretation."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-surface/40 p-5">
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Stage 1 / Literal transcription
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                GPT-4.1 Vision preserves line breaks, spelling, punctuation,
                and page order. It does not summarize or correct the source;
                unclear words are marked as <span className="text-foreground">[unclear]</span>.
              </p>
            </div>
            <div className="border border-border bg-surface/40 p-5">
              <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                Stage 2 / Constrained formatting
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                A second AI pass improves clarity while preserving reviewed work
                items and pricing. It avoids invented materials, quantities,
                dates, warranties, or promises and produces plain-text structure
                for deterministic rendering.
              </p>
            </div>
          </div>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            The formatting stage operates on already-reviewed text. It does not
            replace the user&apos;s review.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="04 / Human in the Loop"
          title="AI does the conversion. The contractor approves the content."
        >
          <p className="text-base leading-7 text-muted">
            The transcription appears in an editable text area before formatting
            or export. The user can correct handwriting-recognition errors, add
            missing context, remove unwanted content, verify pricing and scope,
            and decide when the document is ready to format.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Human review is intentionally placed between perception and
            generation.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="05 / Multi-image Input"
          title="A field workflow that keeps page order intact."
        >
          <p className="text-base leading-7 text-muted">
            The billing workflow supports multiple uploaded images. Images are
            converted for GPT-4.1 Vision input and submitted as part of the
            transcription request, with parallel async processing where
            appropriate, high-detail vision input, and page order preservation.
          </p>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="06 / PDF Generation"
          title="Document generation required more than AI output."
        >
          <p className="text-base leading-7 text-muted">
            The formatted response is not simply dumped into a file. The jsPDF
            export path contains deterministic layout logic for invoice
            title/header treatment, company contact information, section
            detection, numbered line items, aligned price columns, currency
            formatting, wrapped descriptions, bullets and detail lines,
            multi-page continuation, page-overflow handling, and spacing rules.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            AI creates structured content. Deterministic layout code creates the
            actual professional PDF.
          </p>
          <div className="mt-10 max-w-4xl">
            <MphScreenshot
              src="/projects/mph-field-docs/invoice-pdf.png"
              alt="Generated MPH Field Docs invoice PDF with aligned line items and prices"
              caption="Generated invoice output: structured content rendered through deterministic PDF layout code."
              width={1185}
              height={916}
              size="medium"
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="07 / Book Workflow"
          title="The same transcription boundary supports manuscript work."
        >
          <p className="text-base leading-7 text-muted">
            The Book Chapter workflow accepts handwritten manuscript images,
            reads EXIF orientation, corrects orientation where necessary, and
            resizes and compresses large images to JPEG before upload. It uses
            the same vision transcription path, allows review, and exports the
            result as DOCX.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            Canvas-based client image processing, DOCX generation, and FileSaver
            download keep this secondary workflow practical without changing the
            central human-review model.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
            <MphScreenshot
              src="/projects/mph-field-docs/book-workflow.png"
              alt="MPH Field Docs Book Chapter workflow with manuscript upload and transcription review"
              caption="Book Chapter workflow: image preprocessing, transcription, review, and DOCX export."
              width={1980}
              height={1195}
              size="large"
            />
            <MphScreenshot
              src="/projects/mph-field-docs/docx-export.png"
              alt="DOCX export produced by the MPH Field Docs book workflow"
              caption="DOCX output from the reviewed manuscript transcription."
              width={1249}
              height={855}
              size="small"
            />
          </div>
        </CaseStudySection>

        <CaseStudySection
          eyebrow="08 / Architecture"
          title="Next.js routes keep AI processing close to the workflow."
          wide
        >
          <MphArchitecture />
        </CaseStudySection>

        <CaseStudySection
          eyebrow="09 / Applied AI Boundary"
          title="Constrained AI around deterministic document logic."
        >
          <p className="text-base leading-7 text-muted">
            AI handles handwriting perception, language cleanup, and
            professional wording. Deterministic application code handles user
            control, file handling, image processing, document layout, price
            alignment, page breaks, PDF creation, and DOCX creation.
          </p>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            Models handle ambiguous interpretation. Code handles deterministic
            output.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="10 / Technology" title="A focused application stack.">
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
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href="https://mph-vip.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground"
              >
                View live application -&gt;
              </a>
              <a
                href="https://github.com/hirschem/mph-vip"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground"
              >
                View source on GitHub -&gt;
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
