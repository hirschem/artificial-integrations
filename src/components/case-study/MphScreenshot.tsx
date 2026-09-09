import Image from "next/image";

type MphScreenshotProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  size?: "large" | "medium" | "small";
};

export default function MphScreenshot({
  src,
  alt,
  caption,
  width,
  height,
  size = "medium",
}: MphScreenshotProps) {
  return (
    <figure className={size === "small" ? "max-w-2xl" : ""}>
      <div className="overflow-hidden border border-border bg-surface">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 832px"
        />
      </div>
      <figcaption className="mt-3 font-mono text-xs leading-5 text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
