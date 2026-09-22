import { getCourses } from "@/lib/api/courses";
import { formatNumber } from "@/lib/utils";
import type { Stat } from "@/lib/types";

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

  const stats: Stat[] = [
    { label: "Courses", value: formatNumber(courses.length), color: "#2563eb" },
    { label: "Video Lessons", value: formatNumber(lessonCount), color: "#16a34a" },
    { label: "Registered Students", value: formatNumber(studentCount), color: "#e11d48" },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: stat.color }}
            >
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}