interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}