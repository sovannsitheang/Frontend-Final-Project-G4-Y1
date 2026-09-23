"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  getAuthUser,
  getEnrolledSnapshot,
  subscribeAuth,
  subscribeEnrolled,
  toggleEnrollment,
} from "@/lib/auth";

export default function EnrollButton({ courseId }: { courseId: string }) {
  const user = useSyncExternalStore(subscribeAuth, getAuthUser, () => null);
  const enrolled = useSyncExternalStore(
    subscribeEnrolled,
    () => getEnrolledSnapshot().has(courseId),
    () => false,
  );

  if (!user) {
    return (
      <Link
        href="/login"
        className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Enroll Now
      </Link>
    );
  }

  const buttonClass =
    "mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-colors";

  return enrolled ? (
    <div className="mt-7">
      <button
        type="button"
        disabled
        className={`${buttonClass} mt-0 w-full cursor-default bg-brand-800 text-white`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Enrolled
      </button>
      <button
        type="button"
        onClick={() => toggleEnrollment(courseId)}
        className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg border border-slate-300 px-6 text-sm font-medium text-slate-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700"
      >
        Unenroll
      </button>
    </div>
  ) : (
    <button
      type="button"
      onClick={() => toggleEnrollment(courseId)}
      className={`${buttonClass} bg-brand-600 text-white hover:bg-brand-700`}
    >
      Enroll Now
    </button>
  );
}