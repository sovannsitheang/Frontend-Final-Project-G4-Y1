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
  return {
    id: course._id,
    title: course.title,
    description: course.description,
    thumbnailUrl: course.thumbnail ?? null,
    lessonCount: course.lessons?.length ?? 0,
    enrolledCount: course.enrolledStudents?.length ?? 0,
  };
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