"use client";

import { useEffect, useState } from "react";

const flashcards = [
  {
    question: "What is one daily action that keeps the heart connected?",
    answer: "Remembering Allah through zikr and dua.",
  },
  {
    question: "What is a good way to learn consistently?",
    answer: "Read or review a small amount every day.",
  },
  {
    question: "What should Saathi help you do?",
    answer: "Stay steady with prayer, learning, notes, and routines.",
  },
];

const notesStorageKey = "saathi-learn-notes";

export default function LearnPage() {
  const [notes, setNotes] = useState("");
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem(notesStorageKey);

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  function updateNotes(nextNotes: string) {
    setNotes(nextNotes);
    localStorage.setItem(notesStorageKey, nextNotes);
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-10 text-stone-900">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-medium text-emerald-700">
          ← Back to home
        </a>

        <h1 className="mt-8 text-3xl font-bold">Learn</h1>

        <p className="mt-3 max-w-2xl text-stone-700">
          Keep simple notes and review small reminders. Later, this can grow
          into duas, qualities, usool, and personal flashcards.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Notes</h2>

            <label
              htmlFor="notes"
              className="mt-4 block text-sm font-medium text-stone-700"
            >
              Personal learning notes
            </label>

            <textarea
              id="notes"
              rows={10}
              value={notes}
              onChange={(event) => updateNotes(event.target.value)}
              placeholder="Write a short note, dua, reminder, or lesson..."
              className="mt-2 w-full rounded-md border border-stone-300 p-3 text-sm outline-none focus:border-emerald-600"
            />
          </section>

          <section className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Flashcards</h2>

            <div className="mt-4 space-y-4">
              {flashcards.map((card, index) => {
                const isAnswerVisible = visibleAnswerIndex === index;

                return (
                  <div key={card.question} className="rounded-md border border-stone-200 p-4">
                    <p className="text-sm font-semibold text-stone-900">{card.question}</p>

                    {isAnswerVisible && <p className="mt-2 text-sm text-stone-600">{card.answer}</p>}

                    <button
                      type="button"
                      onClick={() => setVisibleAnswerIndex(isAnswerVisible ? null : index)}
                      className="mt-3 rounded-md bg-emerald-700 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-800"
                    >
                      {isAnswerVisible ? "Hide answer" : "Show answer"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
