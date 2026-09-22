import { getCourses } from "@/lib/api/courses";
import CourseCard from "@/components/courses/course-card";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";

export default async function FeaturedCourses() {
  let courses: Awaited<ReturnType<typeof getCourses>> = [];
  try {
    courses = await getCourses();
  } catch {
    // keep the section empty if the API is unreachable
  }

  const featured = courses.slice(0, 6);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured"
            title="Popular Courses"
            description="Hands-on lessons taught by the best teachers from across the Kingdom."
          />
          <Button href="/courses" variant="outline" className="shrink-0">
            View All Courses
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}