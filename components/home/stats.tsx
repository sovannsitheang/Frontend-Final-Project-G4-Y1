import { getCourses } from "@/lib/api/courses";
import { formatNumber } from "@/lib/utils";

export default async function Stats() {
  let courses: Awaited<ReturnType<typeof getCourses>> = [];
  try {
    courses = await getCourses();
  } catch {
    // fall back to zeros if the API is unreachable
  }

  const lessonCount = courses.reduce((sum, course) => sum + course.lessonCount, 0);
  const studentCount = courses.reduce(
    (sum, course) => sum + course.enrolledCount,
    0,
  );

  const stats = [
    { label: "Courses", value: formatNumber(courses.length) },
    { label: "Video Lessons", value: formatNumber(lessonCount) },
    { label: "Registered Students", value: formatNumber(studentCount) },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl bg-honeydew p-10 sm:p-12">
            <p className="text-5xl text-brand-600" aria-hidden="true">
              &ldquo;
            </p>
            <p className="mt-2 font-serif text-2xl leading-snug text-slate-900 sm:text-3xl">
              Education is the most powerful weapon which you can use to change
              the world.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-semibold text-white">
                ក
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  G4-Learning Team
                </p>
                <p className="text-xs text-slate-500">
                  Free e-Learning for every student
                </p>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-brand-100"
            aria-hidden="true"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600">
            Our impact
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Reaching learners all over Cambodia
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
            From classrooms in Phnom Penh to rural schools in every province,
            G4-Learning brings the national curriculum to every student — for
            free.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-brand-600 pl-4">
                <p className="font-sans text-3xl font-bold tracking-tight text-brand-600 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}