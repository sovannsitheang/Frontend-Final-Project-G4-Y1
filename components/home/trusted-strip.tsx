const brands = [
  "National Curriculum",
  "25 Provinces",
  "Khmer + English",
  "Free for Students",
];

export default function TrustedStrip() {
  return (
    <section className="bg-brand-600 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
        <p className="text-sm font-medium text-white">
          Trusted by students and teachers across Cambodia
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold uppercase tracking-widest text-white/80"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}