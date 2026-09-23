import Link from "next/link";
import { getCourseSubjects } from "@/lib/api/courses";
import SubscribeForm from "@/components/layout/subscribe-form";

export default async function Footer() {
  const subjects = await getCourseSubjects();

  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3z" />
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </span>
            <span className="font-serif text-xl font-semibold text-white">G4-Learning</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white">
            G4-Learning is a free e-Learning platform for students, providing
            digital lessons aligned with the national curriculum.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white">
            <p>Phnom Penh, Cambodia</p>
            <p>info@g4-learning.org</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Learn</p>
          <ul className="mt-5 space-y-3 text-sm text-white">
            <li>
              <Link className="transition-colors hover:text-white" href="/courses">
                All Courses
              </Link>
            </li>
            {subjects.map((subject) => (
              <li key={subject}>
                <Link
                  className="transition-colors hover:text-white"
                  href={`/courses?q=${encodeURIComponent(subject.toLowerCase())}`}
                >
                  {subject}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Platform</p>
          <ul className="mt-5 space-y-3 text-sm text-white">
            <li><Link className="transition-colors hover:text-white" href="/about">About Us</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/contact">Contact</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/login">Log in</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/register">Register</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Subscribe</p>
          <p className="mt-5 text-sm leading-relaxed text-white">
            Get new lesson updates straight to your inbox.
          </p>
          <SubscribeForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} G4-Learning. Free e-Learning for everyone.</p>
        </div>
      </div>
    </footer>
  );
}