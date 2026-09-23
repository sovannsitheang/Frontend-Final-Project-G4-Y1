import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseWithLessons } from "@/lib/api/courses";
import { ApiError } from "@/lib/api/client";
import AdminGuard from "@/components/admin/guard";
import LessonManager from "@/components/admin/lesson-manager";

interface AdminCoursePageProps {
  params: Promise<{ courseId: string }>;
}

export default async function AdminCoursePage({
  params,
}: AdminCoursePageProps) {
  const { courseId } = await params;

  let course: Awaited<ReturnType<typeof getCourseWithLessons>>["course"] | null =
    null;
  let lessons: Awaited<ReturnType<typeof getCourseWithLessons>>["lessons"] = [];
  let materialsCount = 0;
  let unavailable = false;
  try {
    ({ course, lessons, materialsCount } = await getCourseWithLessons(courseId));
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }
    unavailable = true;
  }

  return (
    <AdminGuard>
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="text-xs text-slate-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/admin" className="hover:text-brand-700">
                  Manage courses
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-700">
                {unavailable ? "Course" : course?.title}
              </li>
            </ol>
          </nav>

          {unavailable ? (
            <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              We couldn&apos;t reach the server right now. Please try again in a
              moment.
            </p>
          ) : course ? (
            <>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                  Admin · Course editor
                </p>
                <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900">
                  {course.title}
                </h1>
                <p className="mt-2 text-sm text-slate-500">{course.description}</p>
              </div>
              <LessonManager
                courseId={courseId}
                initialLessons={lessons}
                initialMaterials={materialsCount}
              />
            </>
          ) : null}
        </div>
      </section>
    </AdminGuard>
  );
}