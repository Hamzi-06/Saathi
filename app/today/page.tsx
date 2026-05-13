const dailyAmaal = [
  "Prayed five daily salah",
  "Read some Quran",
  "Made morning/evening zikr",
  "Spent time in dua",
  "Benefited someone through words or actions",
];

export default function TodayPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-10 text-stone-900">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-medium text-emerald-700">
          ← Back to home
        </a>

        <h1 className="mt-8 text-3xl font-bold">Today</h1>

        <p className="mt-3 text-stone-700">
          A simple daily checklist to help you stay steady with small,
          consistent actions.
        </p>

        <div className="mt-8 rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">5 Daily A&apos;maal</h2>

          <div className="mt-5 space-y-3">
            {dailyAmaal.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 rounded-md border border-stone-200 p-3"
              >
                <input type="checkbox" className="h-4 w-4 accent-emerald-700" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
