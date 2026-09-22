import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-semibold text-brand-800">G4-Learning</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
            G4-Learning is the official e-Learning platform of the Ministry of
            Education, Youth and Sport of the Kingdom of Cambodia, providing
            free digital lessons aligned with the national curriculum.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><Link className="hover:text-brand-700" href="/courses">All Courses</Link></li>
            <li><Link className="hover:text-brand-700" href="/about">About Us</Link></li>
            <li><Link className="hover:text-brand-700" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-brand-700" href="/login">Log in</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Ministry Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Ministry of Education, Youth and Sport</li>
            <li>Phnom Penh, Cambodia</li>
            <li>info@g4-learning.org</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} G4-Learning. Ministry of Education, Youth and Sport.</p>
          <p>ក្រសួងអប់រំ យុវជន និងកីឡា</p>
        </div>
      </div>
    </footer>
  );
}