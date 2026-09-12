import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "North Monaco Place | Artificial Integrations",
  description:
    "A focused property-marketing website built to turn physical interest into a clear digital buyer experience.",
};

const technologies = [
  "Semantic HTML",
  "CSS",
  "Responsive layout",
  "Vercel",
  "Vercel Analytics",
];

const informationFlow = [
  "Property overview",
  "Plat map",
  "Photos",
  "Highlights",
  "Zoning & development",
  "Utilities",
  "Contact",
];

const dueDiligenceLinks = [
  ["Land development code", "https://library.municode.com/co/commerce_city/codes/land_development_code"],
  ["Interactive zoning map", "https://maps.c3gov.com"],
  ["City development information", "https://www.c3gov.com/Business-Development/Developing-in-Commerce-City"],
  ["Water and sewer tap fees", "https://www.southadamswaterco.gov/business___development/tap_fees.php"],
];

export default function NorthMonacoPlacePage() {
  return (
    <main>
      <section className="py-20 sm:py-28">
        <Container>
          <Link href="/#work" className="font-mono text-xs tracking-[0.16em] text-muted uppercase hover:text-foreground">
            &lt;- Back to Work
          </Link>
          <div className="mt-16 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">05 / Client Website</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">North Monaco Place</h1>
            <p className="mt-4 text-base text-muted sm:text-lg">Property Marketing Website</p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground sm:text-xl">
              A focused property-marketing site built to turn physical interest into a clear digital buyer experience.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            {technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="https://northmonacoplace.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground">
              View live site -&gt;
            </a>
            <a href="https://github.com/hirschem/north-monaco-place" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground">
              View source on GitHub -&gt;
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <CaseStudySection eyebrow="01 / Client Need" title="A clear digital destination for a real property question.">
          <p className="text-base leading-7 text-muted">
            North Monaco Place needed a simple, deployable property-marketing destination for residential development lots. The site had to make the property overview, lot information, plat map, photos, zoning, utilities, official resources, location, and contact path easy to find on a phone or desktop.
          </p>
          <p className="mt-5 border-l border-accent pl-5 text-base leading-7 text-foreground">
            The project called for clarity, fast access, and buyer confidence rather than a complex application architecture.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="02 / Offline to Digital" title="Physical interest needed a low-friction path into useful digital information." wide>
          <div className="grid gap-2 sm:grid-cols-5 sm:items-center sm:gap-3">
            {["Property signage", "QR code", "Mobile website", "Property information", "Buyer contact"].map((item, index, items) => (
              <div key={item} className="flex items-center gap-2 sm:block">
                <div className="flex-1 border border-border bg-surface px-4 py-4 text-sm text-foreground">{item}</div>
                {index < items.length - 1 ? <span className="font-mono text-xs text-accent sm:block sm:py-2 sm:text-center" aria-hidden="true">-&gt;</span> : null}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
            A buyer could encounter the property in the physical world, scan the sign, and reach the same structured information without needing to remember a long URL or search through a general listing site.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="03 / Information Architecture" title="The hierarchy follows the questions a serious buyer naturally asks." wide>
          <div className="grid gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {informationFlow.map((item) => <div key={item} className="border border-border bg-surface px-4 py-4 text-sm leading-5 text-foreground">{item}</div>)}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
            The sequence moves from what the property is, to what it looks like, to what a buyer needs to verify before taking the next step. Information architecture does practical work here: it reduces searching and keeps the contact path connected to the evidence around it.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="04 / Property Presentation" title="Real property imagery carries information that copy cannot." wide>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:items-start">
            <figure>
              <Image src="/projects/north-monaco-place/north-monaco-cover.jpg" alt="North Monaco Place property view" width={1200} height={675} className="h-auto w-full border border-border object-cover" />
              <figcaption className="mt-3 font-mono text-xs leading-5 text-muted">Cover image for the property presentation.</figcaption>
            </figure>
            <div className="grid gap-6">
              <figure>
                <Image src="/projects/north-monaco-place/north-monaco-plat-marked.png" alt="Marked plat map showing the available North Monaco Place lots" width={900} height={700} className="h-auto w-full border border-border object-contain" />
                <figcaption className="mt-3 font-mono text-xs leading-5 text-muted">Marked plat map for parcel context.</figcaption>
              </figure>
              <figure>
                <Image src="/projects/north-monaco-place/north-monaco-location-1.png" alt="Google location view for North Monaco Place" width={900} height={700} className="h-auto w-full border border-border object-cover" />
                <figcaption className="mt-3 font-mono text-xs leading-5 text-muted">Location imagery supports geographic context.</figcaption>
              </figure>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="05 / Buyer Due Diligence" title="Useful information design stops short of making legal promises.">
          <p className="text-base leading-7 text-muted">
            The site separates promotional information from buyer-verification resources. It presents the stated R-2 zoning context, development considerations, utility disclosures, map access, and official municipal links while making clear that buyers must verify permitted uses and requirements with the city.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {dueDiligenceLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="border border-border px-3 py-2 text-sm text-muted hover:border-accent hover:text-accent">{label} -&gt;</a>)}
          </div>
          <p className="mt-6 border-l border-accent pl-5 text-base leading-7 text-foreground">
            The implementation provides a path to official sources; it does not claim to verify zoning eligibility or development outcomes.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="06 / Responsive Conversion Path" title="Mobile usability matters when the user may be standing at the property.">
          <p className="text-base leading-7 text-muted">
            The responsive page keeps the buyer journey usable across phones and larger screens. A QR-driven visit can move from signage to property details, map access, due-diligence resources, and a direct contact path without adding unnecessary interaction layers.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {['QR-driven arrival', 'Google Maps location', 'Direct contact path'].map((item) => <div key={item} className="border border-border bg-surface px-4 py-4 font-mono text-xs leading-5 text-muted">{item}</div>)}
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="07 / Implementation" title="The implementation was intentionally lightweight.">
          <p className="text-base leading-7 text-muted">
            The checked-in implementation is a straightforward semantic HTML and CSS property site with responsive layout and Vercel Analytics. The repository includes no complex application framework in the shipped page; its package contains the analytics dependency, while the site itself is static HTML/CSS.
          </p>
          <p className="mt-5 border-l border-accent pl-5 text-base leading-7 text-foreground">
            The business problem did not require a complex architecture. A small, deployable implementation was the appropriate engineering choice.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="08 / Delivery" title="A completed client website with a practical business role.">
          <p className="text-base leading-7 text-muted">
            The delivered site provides a public property destination that supports QR-code signage, consolidates property and due-diligence information, and remains usable on desktop and mobile. Those are the verifiable outcomes of the implementation; no sales, traffic, lead, or conversion numbers are claimed here.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="09 / Engineering Principle" title="The right implementation is the smallest one that solves the business problem well.">
          <p className="text-base leading-7 text-muted">
            Good engineering is not measured by how much architecture is added. This project needed clear information, reliable links, responsive presentation, and fast delivery. The result is a focused client website whose restraint is part of its quality.
          </p>
        </CaseStudySection>

        <section className="border-t border-border/80 py-20 sm:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/#contact" className="font-mono text-xs tracking-[0.16em] text-muted uppercase hover:text-foreground">Have a focused product or client system to build? -&gt;</Link>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link href="/#work" className="font-medium hover:text-foreground">Back to selected work -&gt;</Link>
              <a href="https://github.com/hirschem/north-monaco-place" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground">View source on GitHub -&gt;</a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
