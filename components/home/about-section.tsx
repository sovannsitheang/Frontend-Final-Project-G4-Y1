import Link from "next/link";
import Button from "@/components/ui/button";

const features = [
  {
    icon: "school",
    title: "Free Access",
    text: "All lessons are free for students, teachers and the general public.",
  },
  {
    icon: "mobile_friendly",
    title: "Learn Anywhere",
    text: "Lessons work on desktop, tablet and mobile without data charges via selected operators.",
  },
  {
    icon: "book",
    title: "National Curriculum",
    text: "Content follows the official textbooks and curriculum of the Ministry of Education.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
            About G4-Learning
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Education is our top priority
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            G4-Learning — from the Khmer words for &ldquo;digital learning&rdquo; — is the
            official e-Learning platform operated by the Ministry of Education,
            Youth and Sport (MoEYS) of Cambodia. It delivers video lessons and
            digital exercises to students from primary to upper secondary
            school, helping every child continue learning anytime, anywhere.
          </p>
          <div className="mt-8 space-y-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700/10 text-brand-700">
                  <Icon name={feature.icon} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{feature.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button href="/about" className="mt-9">
            Learn More About Us
          </Button>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-600 p-10 text-white shadow-xl">
            <p className="text-sm font-medium text-blue-100">ក្រសួងអប់រំ យុវជន និងកីឡា</p>
            <h3 className="mt-3 text-2xl font-bold leading-snug">
              &ldquo;Quality education for all Cambodian children.&rdquo;
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-blue-50">
              The Ministry of Education, Youth and Sport invests in digital
              learning to ensure every student — in the city or the countryside —
              has access to quality education.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-6">
              <Link
                href="https://moeys.gov.kh"
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/25"
              >
                moeys.gov.kh
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const icons: Record<string, string> = {
  school:
    "M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",
  mobile_friendly:
    "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zM9 17h6v2H9v-2zm6.5-4.5L11 17l-3.5-3.5 1.06-1.06L11 14.88l4.44-4.44 1.06 1.06z",
  book: "M12 4C9.5 4 7 4.6 4.5 5.5v14C7 18.6 9.5 18 12 18s5 .6 7.5 1.5v-14C17 4.6 14.5 4 12 4zm-6 4h4v6H6V8zm8 0h4v6h-4V8zm-8 8h4v2H6v-2zm8 0h4v2h-4v-2z",
};

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d={icons[name] ?? icons.book} />
    </svg>
  );
}