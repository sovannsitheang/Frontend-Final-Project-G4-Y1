import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-16 sm:px-6">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Log in to continue your learning journey.
            </p>
          </div>
          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email or student ID</span>
              <input
                type="text"
                required
                placeholder="you@example.com"
                className="mt-1.5 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="mt-1.5 h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </label>
            <div className="flex items-center justify-end">
              <a href="#" className="text-xs font-medium text-brand-700 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            New to Duraseksa?{" "}
            <Link href="/register" className="font-semibold text-brand-700 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}