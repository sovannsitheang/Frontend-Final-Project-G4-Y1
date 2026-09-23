import { cache } from "react";
import { apiGet } from "@/lib/api/client";
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
  async (id: string): Promise<{ course: Course; lessons: Lesson[] }> => {
    const data = await apiGet<ApiCourse & { lessons: ApiLesson[] }>(
      `/api/courses/${id}/lessons`,
    );
    return {
      course: toCourse(data),
      lessons: toLessons(id, data.lessons ?? []),
    };
  },
);

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