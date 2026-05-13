export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Daily Muslim Companion
        </p>

        <h1 className="text-4xl font-bold sm:text-6xl">
          Saathi
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          A simple daily companion for prayer, a&apos;maal, learning, notes,
          and personal routines. Built gently, one useful feature at a time.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold">Today</h2>
            <p className="mt-2 text-sm text-stone-600">
              Track your daily a&apos;maal and reminders.
            </p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold">Learn</h2>
            <p className="mt-2 text-sm text-stone-600">
              Keep notes, duas, and flashcards in one place.
            </p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold">Jamaat Mode</h2>
            <p className="mt-2 text-sm text-stone-600">
              Optional routines for khurooj, schedules, and reflections.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
