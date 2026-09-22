"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

const suggestions = ["Khmer", "Mathematics", "Physics", "English", "History"];

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function submit() {
    router.push(`/courses?q=${encodeURIComponent(query)}`);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-100">
          G4-Learning: Cambodia&apos;s Official E-Learning Platform
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Learn Anytime, Anywhere
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-blue-50 sm:text-lg">
          Free digital lessons for students across Cambodia, aligned with the
          national curriculum of the Ministry of Education, Youth and Sport.
        </p>
        <div className="mx-auto mt-9 max-w-xl">
          <div className="flex items-center gap-2 rounded-full bg-white p-1.5 shadow-lg">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") submit();
              }}
              placeholder="Search for a course..."
              className="w-full rounded-full bg-transparent px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <Button
              className="shrink-0 rounded-full px-5 py-2 sm:px-6"
              onClick={submit}
            >
              Search
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-blue-100">Popular:</span>
            {suggestions.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => router.push(`/courses?q=${encodeURIComponent(tag.toLowerCase())}`)}
                className="rounded-full border border-white/25 px-3 py-1 text-blue-50 transition-colors hover:bg-white/10"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}