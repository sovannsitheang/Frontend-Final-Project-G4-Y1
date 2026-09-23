import { cache } from "react";
import { apiDelete, apiGet, apiPatch, apiPost, apiUpload } from "@/lib/api/client";
import type { Course, Lesson } from "@/lib/types";

interface ApiLesson {
  _id: string;
  title: string;
  content: string;
  course: string;
}

interface ApiCourse {
  _id: string;
  title: string;
  description: string;
  thumbnail?: string;
  enrolledStudents?: unknown[];
  materials?: unknown[];
  quizzes?: unknown[];
  lessons?: string[] | ApiLesson[];
}

function toCourse(course: ApiCourse): Course {
  const thumbnailUrl = course.thumbnail
    ? isValidThumbnail(course.thumbnail)
      ? course.thumbnail
      : null
    : null;

  return {
    id: course._id,
    title: course.title,
    description: course.description,
    thumbnailUrl,
    lessonCount: course.lessons?.length ?? 0,
    enrolledCount: course.enrolledStudents?.length ?? 0,
  };
}

function isValidThumbnail(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.hostname !== "example.com";
  } catch {
    return false;
  }
}

function toLessons(courseId: string, lessons: ApiLesson[]): Lesson[] {
  return lessons.map((lesson) => ({
    id: lesson._id,
    courseId,
    title: lesson.title,
    content: lesson.content,
  }));
}

export const getCourses = cache(async (): Promise<Course[]> => {
  const data = await apiGet<ApiCourse[]>("/api/courses");
  return data.map(toCourse);
});

export const getCourse = cache(async (id: string): Promise<Course> => {
  const data = await apiGet<ApiCourse>(`/api/courses/${id}`);
  return toCourse(data);
});

export const getCourseWithLessons = cache(
  async (id: string): Promise<{ course: Course; lessons: Lesson[]; materialsCount: number }> => {
    const data = await apiGet<ApiCourse & { lessons: ApiLesson[] }>(
      `/api/courses/${id}/lessons`,
    );
    return {
      course: toCourse(data),
      lessons: toLessons(id, data.lessons ?? []),
      materialsCount: data.materials?.length ?? 0,
    };
  },
);

export interface CourseInput {
  title: string;
  description: string;
  thumbnail?: string;
}

export interface LessonInput {
  title: string;
  content: string;
}

export async function createCourse(input: CourseInput): Promise<Course | null> {
  const data = await apiPost<ApiCourse | ApiCourse[] | null>("/api/courses", input);
  const created = Array.isArray(data) ? data[0] : data;
  return created ? toCourse(created) : null;
}

export async function updateCourse(
  id: string,
  input: Partial<CourseInput>,
): Promise<Course | null> {
  const data = await apiPatch<ApiCourse | null>(`/api/courses/${id}`, input);
  return data ? toCourse(data) : null;
}

export async function deleteCourse(id: string): Promise<void> {
  await apiDelete(`/api/courses/${id}`);
}

export async function enrollCourse(id: string): Promise<void> {
  await apiPost(`/api/courses/${id}/enroll`, {});
}

export async function uploadCourseMaterial(
  id: string,
  file: File | Blob,
): Promise<void> {
  const formData = new FormData();
  formData.append("materials", file);
  await apiUpload(`/api/courses/${id}/materials`, formData);
}

export async function createLessons(
  courseId: string,
  lessons: LessonInput[],
): Promise<void> {
  await apiPost(`/api/courses/${courseId}/lessons`, lessons);
}

export async function updateLesson(
  courseId: string,
  lessonId: string,
  input: Partial<LessonInput>,
): Promise<void> {
  await apiPatch(`/api/courses/${courseId}/lessons/${lessonId}`, input);
}

export async function deleteLesson(
  courseId: string,
  lessonId: string,
): Promise<void> {
  await apiDelete(`/api/courses/${courseId}/lessons/${lessonId}`);
}

const TITLE_FILLER_WORDS = new Set([
  "intro",
  "introduction",
  "for",
  "to",
  "in",
  "with",
  "the",
  "of",
  "and",
  "&",
  "core",
  "modern",
  "deep",
  "crash",
  "course",
  "start",
  "started",
  "from",
  "scratch",
  "build",
  "learn",
  "master",
  "mastery",
  "how",
  "what",
  "why",
  "advanced",
  "beginner",
  "beginners",
  "depth",
  "analysis",
  "production",
  "deployment",
  "testing",
  "practitioner",
  "cloud",
  "basics",
  "essentials",
  "fundamentals",
  "principles",
  "techniques",
  "skills",
  "level",
  "design",
  "interfaces",
  "applications",
  "apps",
  "backend",
  "reactive",
  "query",
  "analyze",
  "data",
  "version",
  "control",
  "workflows",
  "dev",
  "type",
  "safety",
  "projects",
  "user",
  "systems",
  "programming",
  "write",
  "reliable",
  "integration",
  "tests",
  "automation",
  "best",
  "practices",
]);

function toSubjectLabel(title: string): string {
  const words = title
    .split(/\s+/)
    .filter((word) => !TITLE_FILLER_WORDS.has(word.toLowerCase().replace(/^\d+$/, "101")))
    .filter((word) => !/^\d+$/.test(word));

  return words
    .slice(0, 2)
    .map((word) => (word === "css" ? "CSS" : word === "aws" ? "AWS" : word))
    .join(" ");
}

export const getCourseSubjects = cache(async (): Promise<string[]> => {
  let courses: Course[] = [];
  try {
    courses = await getCourses();
  } catch {
    return [];
  }

  const subjects: string[] = [];
  for (const course of courses) {
    const label = toSubjectLabel(course.title);
    if (!label) continue;
    if (!subjects.includes(label)) subjects.push(label);
    if (subjects.length >= 8) break;
  }

  return subjects;
});