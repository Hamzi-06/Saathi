"use client";

import { useEffect, useState } from "react";

const dailyAmaal = [
  "Prayed five daily salah",
  "Read some Quran",
  "Made morning/evening zikr",
  "Spent time in dua",
  "Did one good action for someone",
];

const storageKey = "saathi-today-amaal";

export default function TodayPage() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem(storageKey);

    if (savedItems) {
      setCheckedItems(JSON.parse(savedItems));
    }
  }, []);

  function toggleItem(item: string) {
    const nextCheckedItems = checkedItems.includes(item)
      ? checkedItems.filter((checkedItem) => checkedItem !== item)
      : [...checkedItems, item];

    setCheckedItems(nextCheckedItems);
    localStorage.setItem(storageKey, JSON.stringify(nextCheckedItems));
  }

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
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item)}
                  onChange={() => toggleItem(item)}
                  className="h-4 w-4 accent-emerald-700"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <p className="mt-4 text-sm text-stone-600">
            Completed: {checkedItems.length} / {dailyAmaal.length}
          </p>
        </div>
      </section>
    </main>
  );
}
