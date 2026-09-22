export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string | null;
  lessonCount: number;
  enrolledCount: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
}

export interface Stat {
  label: string;
  value: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}