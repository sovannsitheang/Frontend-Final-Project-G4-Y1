import SectionHeading from "@/components/ui/section-heading";

const milestones = [
  {
    year: "2020",
    title: "Launch of Duraseksa",
    text: "Duraseksa is launched as a free e-Learning platform to support distance learning during school closures.",
  },
  {
    year: "2021",
    title: "Full curriculum coverage",
    text: "The platform expands to cover all grades and core subjects following the national textbooks and curriculum.",
  },
  {
    year: "2023",
    title: "Reaching every province",
    text: "Tens of thousands of students across all 25 provinces enroll and learn through the platform, many with zero data charges.",
  },
  {
    year: "Today",
    title: "A national learning companion",
    text: "Duraseksa remains a trusted free resource for teachers, students and lifelong learners across the Kingdom.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About G4-Learning
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            A free e-Learning platform for every student.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            center
            eyebrow="Who we are"
            title="Digital learning for every Cambodian child"
          />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              G4-Learning — a name that blends the Khmer words for{" "}
              <strong className="font-semibold text-slate-900">digital</strong>{" "}
              and <strong className="font-semibold text-slate-900">learning</strong> —
              is an e-Learning platform offering free courses for students
              across Cambodia.
            </p>
            <p>
              The platform delivers free video lessons, exercises and digital
              resources aligned with the official national curriculum, covering
              Khmer literature, mathematics, science, social studies, English,
              ICT, arts and more for students from primary through upper
              secondary school.
            </p>
            <p>
              Our mission is simple: ensure every child — whether in Phnom Penh
              or a remote rural community — can continue learning anytime,
              anywhere, and build the knowledge and skills they need for the
              future of Cambodia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            center
            eyebrow="Our journey"
            title="Milestones"
          />
          <div className="mt-12 space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col gap-4 sm:flex-row sm:items-start ${
                  index !== milestones.length - 1
                    ? "border-b border-slate-200 pb-8 mb-8"
                    : ""
                }`}
              >
                <span className="inline-flex h-9 w-fit min-w-[5.5rem] items-center justify-center rounded-full bg-brand-700/10 px-4 text-sm font-bold text-brand-700">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {milestone.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}