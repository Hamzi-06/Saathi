export default function JamaatPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-10 text-stone-900">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-medium text-emerald-700">
          ← Back to home
        </a>

        <h1 className="mt-8 text-3xl font-bold">Jamaat Mode</h1>

        <p className="mt-3 text-stone-700">
          A personal space for optional jamaat routines, khurooj notes,
          packing lists, schedules, and reflections.
        </p>

        <div className="mt-8 rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Coming next</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            <li>Daily jamaat schedule checklist</li>
            <li>Packing checklist</li>
            <li>Masjid notes</li>
            <li>Khurooj journal</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
